// src/adapters/BlockchainAdapter.ts
import { IGrabadorBlockchain } from './IGrabadorBlockchain';

export class BlockchainAdapter implements IGrabadorBlockchain {
  
  async registrarTicket(hash: string): Promise<string> {
    console.log(`[Mock] 📡 Conectando con el nodo de Polygon...`);
    
    // Simulamos un retraso de red de 1.5 segundos
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generamos un Hash de transacción falso que parezca real
    const fakeTxId = "0x" + [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    console.log(`[Mock] ✅ Registro exitoso en el bloque #842910`);
    console.log(`[Mock] 🧾 TX ID: ${fakeTxId}`);

    return fakeTxId; // Cumple con el RF-08 (Devolver el comprobante)
  }
}