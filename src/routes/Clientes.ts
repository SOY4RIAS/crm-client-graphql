
import { ListClientes, EditarCliente, CreateCliente } from '../pages/Clientes';
import { IRoute } from '../interfaces/routes';

interface IClienteRoutes {
    [key: string]: IRoute
}


export enum EClientesRoutes {
    ListClientes = '/clientes',
    EditClientes = '/clientes/editar/',
    CreateClientes = '/clientes/crear'
}

export const ClientesRoutes: IClienteRoutes = {

    'ListClientes': {
        declarativePath: '/clientes',
        path: '/',
        exact: true,
        args: false,
        component: ListClientes
    },

    'EditClientes': {
        declarativePath: '/clientes/editar/:id',
        path: '/',
        exact: true,
        args: true,
        component: EditarCliente
    },

    'CreateClientes': {
        declarativePath: '/clientes/crear',
        path: '/',
        exact: true,
        args: true,
        component: CreateCliente
    }
}