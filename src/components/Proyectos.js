import React, {useState, useEffect, useContext} from 'react'

import ProyectoContext from './../context/proyectos/ProyectoContext'

export default function Proyectos() {


    // USECONTEXT ESTADO GLOBAL

    const context = useContext(ProyectoContext)
    const {
        proyectos,
        darkMode,
        obtenerProyectos,
        actualizarProyecto,
        eliminarProyecto,
        crearProyecto } = context

    // USESTATE - ESTADO LOCAL

    const [ nuevoProyecto, setNuevoProyecto] = useState({
        nombre: ""
    })

    const [modoEdicion, setModoEdicion] = useState(false)

    //USEEFFECT

    useEffect(()=> { 

        obtenerProyectos()

    }, [])
    

    const manejarCambios = (event) => {
        event.preventDefault()
        
        console.log(event.target.value)

        setNuevoProyecto({
            ...nuevoProyecto,
            [event.target.name]: event.target.value
        })
    }

    const enviarFormulario = (event) => {
        event.preventDefault()

        crearProyecto(nuevoProyecto)
    }

        // MODO EDICIÓN

        const activarModoEdicion = (event, element) => {
            event.preventDefault()

            setModoEdicion(true)

            console.log(element)

            setNuevoProyecto(element)
    
        }

// EVENTO EDITAR

        const editarProyecto = (event) => {
            event.preventDefault()
            console.log("editando proyecto")
            actualizarProyecto(nuevoProyecto)
            setModoEdicion(false)
            setNuevoProyecto({nombre: ""})
        }

// BORRAR PROYECTO

        const borrarProyecto = (event, element) => {

            event.preventDefault()
            eliminarProyecto(element)
        }
    
    return (
        <div>
            Hola soy todos los proyectos del backend :D



            <p>Dark Mode: {
                darkMode ? "Activado" : "Apagado"
            }</p>

            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

            <hr/>

            <form onSubmit={modoEdicion ?
                (e) => editarProyecto(e)
                :
                (e) => enviarFormulario(e)}>
                <input
                    name="nombre"
                    type="text"
                    value={nuevoProyecto.nombre}
                    onChange={(e) => { manejarCambios(e) }}
                />

                <button>
                    { modoEdicion ? "Editar proyecto" : "Crear proyecto" }
                </button>

            </form>

            {proyectos.length === 0 ?
            "No tengo proyectos"
            :
                proyectos.map((proyecto, i) => {
                    return(
                        <p key={i}>
                        {proyecto.nombre} - {proyecto._id}

                        <button onClick={(evento) => {activarModoEdicion(evento, proyecto)}}>Editar</button>
                        <button onClick={(evento) => {borrarProyecto(evento, proyecto)}}>Borrar</button>
                        </p>
                    )
                })
            }

        </div>
    )
}