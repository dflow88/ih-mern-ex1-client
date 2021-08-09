import React, {//useState,
     useContext} from 'react'

import WavesContext from './../context/waves/WavesContext'

export default function Waves() {

    const context = useContext(WavesContext)
    const {
        waves,
        getWaves//,
        // createWave,
    } = context


    // const [ createActive, setCreateActive ] = useState(false)

    // const [ newWave, setNewWave ] = useState({
    //     name: "",
    //     country: "",
    //     biggestSizeM: "",
    //     season: "",
    //     waveType: ""
    // })

    // const activateCreate = (event) => {
    //     setCreateActive(true)
    //     // createWave(element)
    // }

    // const handleChange = (event) => {
    //     event.preventDefault()
        
    //     setNewWave({

    //     })

    // }

    return (
        <>
            <div>
                <button onClick={() => { getWaves() }}>
                    Waves list
                </button>
            </div>

            {/* <div>
                <button onClick={(e) => {activateCreate(e)}}>
                    Create new Wave
                </button>
            </div> */}

            {/* <div style={{display: "flex", flexDirection: "column", display: createActive ? "block" : "none"}}>
                <h2>Create new wave</h2>
                <form onSubmit={(e) => {createWave(e)}}>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={newWave.name}
                        onChange={(e) => { handleChange(e) }}
                        />
                    <label>Country:</label>
                    <input
                        name="country"
                        value={newWave.country}
                        onChange={(e) => { handleChange(e) }}
                        />
                    <label>Biggest wave recorded:</label>
                    <input
                        name="biggestSizeM"
                        value={newWave.biggestSizeM}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <label>Season:</label>
                    <input
                        name="season"
                        value={newWave.season}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <label>Wave type:</label>
                    <input
                        name="waveType"
                        value={newWave.waveType}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <button>
                        Add wave
                    </button>
                </form>
            </div> */}
        
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
