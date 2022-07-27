# Voting Contract Manipulation

For this project, I took the standard voting contract example from solidity's website and modified it to do the following:

1. Remove delegates from the contract completely
2. Add a way for the chairperson to close the ballot when they wish. No one should be able to vote after it is closed
3. Make it so no one knows the winner until the ballot is closed

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
