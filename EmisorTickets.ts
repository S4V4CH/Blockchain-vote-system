// src/services/EmisorTickets.ts
import { IGrabadorBlockchain } from './IGrabadorBlockchain';

export class EmisorTickets {
  constructor(private grabador: IGrabadorBlockchain) {}

  async emitir(idEstudiante: string, hashVoto: string) {
    console.log(`\n--- PROCESANDO EMISIÓN DE TICKET ---`);
    console.log(`Estudiante: ${idEstudiante}`);

    // RF-07: Mandamos a registrar (aquí entra el Mock)
    const comprobante = await this.grabador.registrarTicket(hashVoto);

    // RF-10: Devolvemos el resultado al usuario
    return {
      success: true,
      mensaje: "Ticket autorizado y registrado en el Ledger",
      ticketHash: hashVoto,
      blockchainTx: comprobante
    };
  }
}