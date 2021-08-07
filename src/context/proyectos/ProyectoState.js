
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
                obtenerProyectos
            }}
        >

            { props.children }



        </ProyectoContext.Provider>
    )

}


export default ProyectoState