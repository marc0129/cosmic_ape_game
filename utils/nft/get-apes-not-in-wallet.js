const { isValidSolanaAddress, getParsedNftAccountsByOwner } = require("@nfteyez/sol-rayz");
const connection = require("./connection");

const getApesNotInWallet = async ({
  addresses,
  wallet,
}) => {
  console.log(`Check if apes(${addresses}) are in the wallet(${wallet})`)
  const result = isValidSolanaAddress(wallet);

  if(result) {
    const nfts = await getParsedNftAccountsByOwner({
      publicAddress: wallet,
      serialization: true,
      connection: connection
    });

    const nftAddresses = (nfts || []).map(nft => nft.mint)
    console.log(`These nfts(${nftAddresses.join(', ')}) are detected in the wallet(${wallet})`)

    return (addresses || []).filter(address => !nftAddresses.includes(address))
  } else {
    return false
  }
}

module.exports = getApesNotInWallet;