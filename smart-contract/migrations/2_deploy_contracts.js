var helloBlockchain = artifacts.require('./AmazonCoin.sol');

module.exports = function (deployer) {
  deployer.deploy(helloBlockchain);
};
