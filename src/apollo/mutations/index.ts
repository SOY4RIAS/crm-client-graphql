
import gql from 'graphql-tag'


export const CREATE_CLIENTE = gql`

mutation crearCliente($input: ClienteArg) {
    clienteInput(cliente: $input) {
        id
        nombre
        apellido
    }
}
`
