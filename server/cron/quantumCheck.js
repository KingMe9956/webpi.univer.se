const { QuantumThreatDetector } = require('quantum-secure-sdk');
const User = require('../models/User');

async function runQuantumCheck() {
  const vulnerableUsers = await QuantumThreatDetector.checkVulnerableAccounts();
  
  for (const user of vulnerableUsers) {
    await User.enableQuantumProtection(user.id);
    console.log(`Enabled quantum protection for ${user.email}`);
  }
}

module.exports = runQuantumCheck;