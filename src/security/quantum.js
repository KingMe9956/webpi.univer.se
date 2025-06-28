import { Dilithium } from 'oqs-js';
import { QuantumVault } from 'uip-secure';

export class QuantumSecurity {
  constructor() {
    this.keyPair = Dilithium.generateKeyPair('Dilithium5');
    this.vault = new QuantumVault();
  }

  async sign(message) {
    const signature = Dilithium.sign(message, this.keyPair.privateKey);
    return {
      message,
      signature,
      publicKey: this.keyPair.publicKey
    };
  }

  async encrypt(data) {
    return this.vault.encrypt(data, {
      algorithm: 'CRYSTALS-Kyber',
      securityLevel: 5
    });
  }
}