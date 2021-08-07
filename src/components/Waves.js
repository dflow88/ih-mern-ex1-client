import React, {useState, useContext} from 'react'

import WavesContext from './../context/waves/WavesContext'

export default function Waves() {

    const context = useContext(WavesContext)
    const {
        waves,
        getWaves
    } = context

    return (
        <>
            <div>
                <button onClick={() => { getWaves() }}>
                    Lista de Olas Grandes
                </button>
            </div>

            {
                waves.map((e) => {
                    return(

                        <div style={{display: e.name ? "block" : "none"}}>

                            <h2>{e.name}</h2>
                            <h4>{e.country}</h4>
                            <p>This is a {e.waveType}.</p>
                            <p>The biggest wave here is around {e.biggestSizeM} meters</p>
                            <p>The best time to surf is {e.season}.</p>
        
                        </div>
                    )
                })
            }
        </>

    )
}
