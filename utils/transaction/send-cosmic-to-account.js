const { PublicKey, Transaction, Keypair } = require('@solana/web3.js');
const { 
  TOKEN_PROGRAM_ID,
  Token,
} = require('@solana/spl-token')
const bs58 = require('bs58')

const connection = require('../nft/connection');
const { getOrCreateAssociatedTokenAccount } = require('./libs/getOrCreateAssociatedTokenAccount');
const { COSMIC_GAME_WALLET_SEED } = require('../../static/cosmic-in-game-wallet-seed');

const sendCosmicToAccount = async ({
  address,
  amount,
}) => {
  if (!address || !amount) {
    throw new Error('Invalid Parameters')
  }

  console.log(`SEND ${amount} $Cosmic to ${address}`)

  const toPublicKey = new PublicKey(address)
  const mint = new PublicKey(process.env.COSMIC_MINT_ADDRESS)
  const vaultKeyPair = Keypair.fromSecretKey(
      bs58.decode(process.env.COSMIC_GAME_WALLET_PRIVATE_KEY)
  );
  const fromPublicKey = new PublicKey(vaultKeyPair.publicKey)

  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromPublicKey,
    mint,
    fromPublicKey,
    vaultKeyPair,
  )

  const toTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromPublicKey,
    mint,
    toPublicKey,
    vaultKeyPair,
  )

  const transaction = new Transaction().add(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address, // source
      toTokenAccount.address, // dest
      fromPublicKey,
      [],
      amount * Math.pow(10, process.env.COSMIC_DECIMAL || 6),
    )
  )
  
  const signature = await connection.sendTransaction(
    transaction,
    [ vaultKeyPair ],
  )

  await connection.confirmTransaction(signature)
  console.log('Transaction is sent, signature: ', signature)
  return signature
}

module.exports = sendCosmicToAccount