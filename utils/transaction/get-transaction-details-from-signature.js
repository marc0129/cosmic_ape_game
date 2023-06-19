const connection = require('../nft/connection');

const getTransactionDetailsFromSignature = async signature => {
  console.log('Trying to fetch and parse signature', signature)
  const transactionDetails = await connection.getParsedTransaction(signature)

  return transactionDetails
}

module.exports = getTransactionDetailsFromSignature