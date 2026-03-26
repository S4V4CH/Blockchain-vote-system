// src/index.ts
import { BlockchainAdapter } from './BlockchainAdapter';
import { EmisorTickets } from './EmisorTickets';

// 1. Instanciamos el Mock (Nuestra simulación funcional)
const grabadorSimulado = new BlockchainAdapter();

// 2. Inyectamos el mock al servicio (Inyección de Dependencias)
const sistema = new EmisorTickets(grabadorSimulado);

// 3. Ejecutamos un ejemplo
const hashDePrueba = "0x746573745f766f74655f686173685f32303236"; // Un hash de ejemplo

sistema.emitir("EST-456", hashDePrueba)
  .then(resultado => {
    console.log("\n--- RESULTADO FINAL PARA EL ESTUDIANTE ---");
    console.log(resultado);
  })
  .catch(err => console.error("Error en el sistema:", err));