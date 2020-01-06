import gql from 'graphql-tag';


export const CLIENTES_QUERY = gql`{
    clientes:fetchClientes {
        id
        nombre
        empresa
        apellido
    }
}`