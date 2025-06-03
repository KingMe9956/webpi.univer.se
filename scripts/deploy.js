// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();
  const treasuryAddress = "0x6aF3fB556c57f4d973a3AA7B80Bb5E643e03690e"; // <<< YOUR WALLET ADDRESS
  
  const ProPay = await ethers.getContractFactory("ProPayQuantum");
  const proPay = await ProPay.deploy(treasuryAddress);
  
  console.log("Deployed to:", proPay.address);
}