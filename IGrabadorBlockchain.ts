export interface IGrabadorBlockchain {
  // El "method(data)" de tu imagen
  registrarTicket(hash: string): Promise<string>;
}