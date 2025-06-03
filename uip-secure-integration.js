// src/uip-secure.js
import UIP from 'github:kingme9956uip-secure#v2.1';

class ProPayWallet {
  constructor() {
    this.uip = new UIP.SecureConnect({
      chainId: 137,
      rpcUrl: 'https://polygon-rpc.com'
    });
  }

  async connect() {
    try {
      await this.uip.authenticate({
          biometric: true,
          deviceAttestation: true
      });
      return this.uip.getPublicAddress();
    } catch (error) {
      throw new Error('UIP Secure connection failed');
    }
  }

  async signTransaction(txData) {
    return this.uip.signSecureTransaction(txData);
  }
}