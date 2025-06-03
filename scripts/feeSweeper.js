// scripts/feeSweeper.js
import { Wallet } from 'ethers';
import { ProPayQuantum__factory } from './contracts';

const treasury = new Wallet(process.env.TREASURY_KEY);
const contract = ProPayQuantum__factory.connect(contractAddress, treasury);

async function sweep() {
  const balance = await contract.provider.getBalance(contract.address);
  if (balance.gt(ethers.utils.parseEther('0.1'))) {
    await contract.withdrawFees();
  }
}

// Run every hour
setInterval(sweep, 3600000);