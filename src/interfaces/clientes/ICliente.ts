import { IPedidos } from './IPedidos';
import { ClienteTipo } from './enums/ClienteTipo';

export interface ICliente {
    id: string
    nombre: string
    apellido: string
    empresa: string
    email: string
    pedidos: IPedidos[]
    tipo: ClienteTipo
}

export interface IClienteQuery {
    clientes: ICliente[]
}