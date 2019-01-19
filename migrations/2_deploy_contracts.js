var SimpleStorage = artifacts.require('./SimpleStorage.sol')
const HogwartsElection = artifacts.require('./HogwartsElection.sol')

module.exports = function(deployer) {
  deployer.deploy(HogwartsElection)
  deployer.deploy(SimpleStorage)
}
