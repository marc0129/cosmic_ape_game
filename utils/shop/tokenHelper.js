const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWTSECRET;

function createToken(account) {
  return new Promise((resolve, reject) => {
    const data = { account, domain: process.env.COSMIC_DOMAIN };

    jwt.sign(data, jwtSecret, { expiresIn: '24h' }, (err, token) => {
      if (err || !token) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

function verifyToken(_token) {
  return new Promise((resolve, reject) => {
    jwt.verify(_token, jwtSecret, (err, decodedToken) => {
      if (err || !decodedToken) {
        console.log("verifyToken-error", _token, err);
        reject(err);
      } else {
        resolve(decodedToken);
      }
    });
  });
}

module.exports = { createToken, verifyToken };