const { isValidSolanaAddress, getParsedNftAccountsByOwner } = require("@nfteyez/sol-rayz");
const connection = require("./connection");

const checkIfApeIsInWallet = async ({
  address,
  wallet,
}) => {
  console.log(`Check if an ape(${address}) is in the wallet(${wallet})`)
  const result = isValidSolanaAddress(wallet);

  if(result) {
    const nfts = await getParsedNftAccountsByOwner({
      publicAddress: wallet,
      serialization: true,
      connection: connection
    });
    const nftAddresses = (nfts || []).map(nft => nft.mint)
    console.log(`These nfts(${nftAddresses.join(', ')}) are detected in the wallet(${wallet})`)

    return nftAddresses.includes(address)
  } else {
    return false
  }
}

module.exports = checkIfApeIsInWallet;