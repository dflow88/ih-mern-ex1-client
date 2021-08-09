
import React, { useReducer } from 'react'
import axios from 'axios'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

const ProyectoState = (props) => {

    // 1. ESTADO INICIAL
    // no es obligatorio PERO ES ALTAMENTE RECOMENDADO. SIEMPRE HACER UN OBJETO COMO ESTADO INICIAL
    
    const initialState = {
        proyectos: [
            {
                id: 0,
                nombre: "Arquitectura DESDE GLOBAL"
            }
        ],

    }

    // 2. DISPATCHING Y REDUCERS

    const [ globalState, dispatch ] = useReducer(ProyectoReducer, initialState)


    // 3. FUNCIONES
    // nos van a ayudar a capturar los eventos de los componentes

    const crearProyecto = async (dataForm) => {
        try {
            const res = await axios.post("http://localhost:3005/api/proyectos/crear",  dataForm)
            obtenerProyectos(res)

        } catch (error) {
        }

    }

    const obtenerProyectos = async () => {
        try {
            const respuesta = await axios.get("http://localhost:3005/api/proyectos")

            const proyectosActualizados = respuesta.data


            dispatch({
                type: "OBTENER_PROYECTOS",
                payload: proyectosActualizados
            })




        } catch (error) {

        }
    }

    const actualizarProyecto = async (dataForm) => {

        const form = {
            proyectoId: dataForm._id,
            nombre: dataForm.nombre
        }
        const res = await axios.post("http://localhost:3005/api/proyectos/actualizar", form)
        obtenerProyectos()
        console.log(res)
    }

    const eliminarProyecto = async (dataForm) => {
        const form = {
            proyectoId: dataForm._id
        }

        const res = await axios.post("http://localhost:3005/api/proyectos/eliminar", form)
        console.log(res)
        obtenerProyectos()
    }

    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <ProyectoContext.Provider
            value={{
                proyectos: globalState.proyectos,
                darkMode: true,
                usuario: {
                    nombre: "Mike",
                    email: "m@mikenieva.com"
                },
                obtenerProyectos,
                crearProyecto,
                actualizarProyecto,
                eliminarProyecto
            }}
        >

            { props.children }



        </ProyectoContext.Provider>
    )

}


export default ProyectoState