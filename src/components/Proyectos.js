import React, {useState, useEffect, useContext} from 'react'

import ProyectoContext from './../context/proyectos/ProyectoContext'

export default function Proyectos() {

    const context = useContext(ProyectoContext)
    const {
        proyectos,
        darkMode,
        usuario,
        obtenerProyectos } = context
    

    return (
        <div>
            Hola soy todos los proyectos del backend :D

            {
                proyectos.map((e) => {
                    return(
                        <p>{e.nombre}</p>
                    )
                })
            }

            <p>Dark Mode: {
                darkMode ? "Activado" : "Apagado"
            }</p>

            <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button>

        </div>
    )
}