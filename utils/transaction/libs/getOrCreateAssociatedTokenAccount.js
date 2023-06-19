const { 
    TOKEN_PROGRAM_ID, 
    ASSOCIATED_TOKEN_PROGRAM_ID,
    Token,
} = require('@solana/spl-token')
const { Transaction } = require('@solana/web3.js')
const { getAccountInfo } = require('./getAccountInfo')

async function getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint,
    owner,
    signer,
    programId = TOKEN_PROGRAM_ID,
    associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID
) {
    const associatedToken = await Token.getAssociatedTokenAddress(
        associatedTokenProgramId,
        programId,
        mint,
        owner,
    )

    let account
    try {
        account = await getAccountInfo(connection, associatedToken)
    } catch (error) {
        // TokenAccountNotFoundError can be possible if the associated address has already received some lamports,
        // becoming a system account. Assuming program derived addressing is safe, this is the only case for the
        // TokenInvalidAccountOwnerError in this code path.
        if (error.message === 'TokenAccountNotFoundError' || error.message === 'TokenInvalidAccountOwnerError') {
            // As this isn't atomic, it's possible others can create associated accounts meanwhile.
            try {
                const transaction = new Transaction().add(
                    Token.createAssociatedTokenAccountInstruction(
                        associatedTokenProgramId,
                        programId,
                        mint,
                        associatedToken,
                        owner,
                        payer,
                    )
                )

                const signature = await connection.sendTransaction(transaction, [signer])

                await connection.confirmTransaction(signature)
            } catch (error) {
                // Ignore all errors; for now there is no API-compatible way to selectively ignore the expected
                // instruction error if the associated account exists already.
            }

            // Now this should always succeed
            account = await getAccountInfo(connection, associatedToken)

        } else {
            throw error
        }
    }

    if (!account.mint.equals(mint.toBuffer())) throw Error('TokenInvalidMintError')
    if (!account.owner.equals(owner.toBuffer())) throw new Error('TokenInvalidOwnerError')

    return account
}

module.exports = {
    getOrCreateAssociatedTokenAccount
}