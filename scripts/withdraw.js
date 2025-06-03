// scripts/withdraw.js
const contract = await ethers.getContractAt("ProPayQuantum", contractAddress);
await contract.withdrawFees();