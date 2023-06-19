const { Connection, clusterApiUrl } = require("@solana/web3.js");

const connection =(process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test')?
      new Connection(process.env.SOL_NETWORK_PROD) : new Connection(clusterApiUrl(process.env.SOL_NETWORK_LOCAL));

module.exports = connection