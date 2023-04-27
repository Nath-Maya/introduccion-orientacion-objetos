import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas.js";

//!HERENCIA

export class CuentaCorriente extends Cuenta {
    //exporte la clase Cuenta corriente que extiende de la clase Cuenta, es decir que, cuentaCorriente es hija de Cuenta.  

    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        CuentaCorriente.cantidadCuentas++;
    }
}