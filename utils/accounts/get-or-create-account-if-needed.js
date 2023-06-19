const { Account } = require('../../models/index');

const getOrCreateAccountIfNeeded = async ({
  address,
  transaction,
}) => {
  if (!address) {
    return 'No Address'
  }

  console.log(`Checking if an account is already created - Address(${address})`)

  const account = await Account.findOne({
    where: {
      address,
    }
  }, { transaction })

  if (!!account) {
    console.log(`This account is already existing - Address(${address}), Model(${account})`)
    return account
  }

  console.log(`This account is not created yet && creating an account - Address(${address})`)
  const createdAccount = await Account.create({
    address,
    experience: 0,
  })

  console.log(`Account is created - Address(${address}), Model(${createdAccount})`)

  return createdAccount
}

module.exports = getOrCreateAccountIfNeeded;