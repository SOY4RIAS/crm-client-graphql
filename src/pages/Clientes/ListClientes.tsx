import React, { Fragment } from 'react'
import { Query, useQuery } from 'react-apollo';
import { CLIENTES_QUERY } from '../../apollo/queries';
import { ICliente, IClienteQuery } from '../../interfaces';
import { CircleLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { EClientesRoutes } from '../../routes';

const Title = () => <h1 className="text-center mt-4">Listado de clientes</h1>


export const ListClientes: React.FC = () => {

  const { loading, error, data } = useQuery<IClienteQuery>(CLIENTES_QUERY)

  if (loading) {
    return (
      <Fragment>
        <Title />
        <div className="text-center p-5 d-flex justify-content-center align-items-center">
          <CircleLoader size={150} color={'var(--secondary)'} loading={true} />
        </div>
      </Fragment>
    )
  }

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <Fragment>
      <Title />
      <ul className="list-group mt-4">
        {
          data?.clientes.map((cliente) => (
            <li key={cliente.id} className="list-group-item">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-8 d-flex  justify-content-between align-items-center">
                  {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  <Link
                    to={`${EClientesRoutes.EditClientes}${cliente.id}`}
                    className="btn btn-block btn-success d-block d-md-inline-block"
                  >
                    Editar Cliente
                  </Link>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </Fragment>
  )
}


