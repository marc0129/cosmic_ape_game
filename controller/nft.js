
var moment = require('moment');
const { Apes, Missions, Mission_Histories } = require('../models/index')

const { Connection, clusterApiUrl } = require('@solana/web3.js');
const { getParsedNftAccountsByOwner, isValidSolanaAddress } = require('@nfteyez/sol-rayz')
const axios = require('axios').default;

const minted = require('../static/cosmic_mint_data.json')
const { base58_to_binary } = require('base58-js')
const nacl = require("tweetnacl");



module.exports = {
    async getWalletNfts(req, res) {
        var {wallet_address} = req.body;
        var result = isValidSolanaAddress(wallet_address);
		
        if(result) {

            var addresses = minted.map(mint => {
                return mint.address;
            })

            var nfts = await getParsedNftAccountsByOwner({
                publicAddress: wallet_address,
                serialization: true,
            });
    
            var nftRequest = nfts.map(async (v, k) => {
                
                // Filters the NFTs
                // Check if the NFT is in the Mint Data
                if(addresses.indexOf(v.mint) < 0) {
                    delete nft[k];
                    return;
                }

                var uri = v.data.uri;
                
                // Fetch NFT Data
                var data = await axios.get(uri);
                v.deets = data.data;
            })
    
            var nftPromise = await Promise.all(nftRequest).then(() => {
                res.json(nfts)
            })
        } else {
            res.status(404).json({
                type: "error",
                msg: "Invalid Wallet Address"
            })
        }
    },

    async verifyWallet(req, res) {
        const {message, signature, publicKey} = req.body;

        const encodedMessage = new TextEncoder().encode(message, 'utf8');
        const u8arrSignature = Uint8Array.from(signature.data);
        console.log(signature, ' -- sig len')
        const b58PublicKey = base58_to_binary(publicKey);

        try {
            const verify = await nacl.sign.detached.verify(encodedMessage, u8arrSignature, b58PublicKey);
            console.log(verify, ' -- verify')
            res.status(200).json(verify)
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}