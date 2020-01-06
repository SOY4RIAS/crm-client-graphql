import React, { Fragment, useState } from 'react'
import { useMutation } from 'react-apollo'
import { CREATE_CLIENTE } from '../../apollo/mutations'
import { ICliente } from '../../interfaces'


type formKeys = 'nombre' | 'apellido' | 'empresa' | 'edad' | 'email' | 'tipo'


interface formState {
    [key: string]: string
    nombre: string
    apellido: string
    empresa: string
    edad: string
    email: string
    tipo: string
}

export const CreateCliente: React.FC = () => {

    const initialState = {
        nombre: '',
        apellido: '',
        empresa: '',
        edad: '',
        email: '',
        tipo: ''
    }


    const [form, setForm] = useState<formState>(initialState)
    const [createCliente, { loading, error, data }] = useMutation<ICliente>(CREATE_CLIENTE)

    const handleForm = (name: formKeys, value: any) => {
        if (name === 'edad') value = Number(value)
        setForm((state: formState) => {
            state[name] = value
            return { ...state }
        })
    }

    const handleSubmit = () => {

        console.log(form)

        createCliente({
            variables: {
                input: { ...form }
            }
        })

    }

    return (

        <Fragment>

            <h2 className="text-center">Nuevo Cliente</h2>
            {loading && <h3 className="text-center">Guardando...</h3>}
            {error && <h4 className="text-center">{error.message}</h4>}
            <div className="row justify-content-center">
                <form className="col-md-8 m-3"

                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={form.nombre}
                                onChange={({ target }) => {
                                    handleForm('nombre', target.value)
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                value={form.apellido}
                                onChange={({ target }) => {
                                    handleForm('apellido', target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Empresa"
                                value={form.empresa}
                                onChange={({ target }) => {
                                    handleForm('empresa', target.value)
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={form.email}
                                onChange={({ target }) => {
                                    handleForm('email', target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Edad</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Edad"
                                value={form.edad}
                                onChange={({ target }) => {
                                    handleForm('edad', target.value)
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Tipo Cliente</label>
                            <select className="form-control"
                                value={form.tipo}
                                onChange={({ target }) => {
                                    handleForm('tipo', target.value)
                                }}

                            >
                                <option value="">Elegir...</option>
                                <option value="PREMIUM">PREMIUM</option>
                                <option value="BASICO">BÁSICO</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success float-right">
                        Guardar Cambios
                    </button>
                </form>

            </div>
        </Fragment>
    )

}