import React, {useState,
     useContext} from 'react'

import WavesContext from './../context/waves/WavesContext'

export default function Waves() {

    const context = useContext(WavesContext)
    const {
        waves,
        getWaves,
        createWave,
        activateCreate,
        createActive,
        setCreateActive,
        newWave,
        setNewWave,
        updateWave,
        deleteWave
    } = context

    const [ editActive, setEditActive ] = useState(false)

    const handleChange = (event) => {
        event.preventDefault()
        
        setNewWave({
            ...newWave,
            [event.target.name]: event.target.value
        })
    }

    const sendForm = (event) => {
        event.preventDefault()
        if (createActive) {createWave(newWave)}
        if (editActive) {editWave(event)}
    }

    const editWave = (event) => {
        event.preventDefault()
        console.log(newWave)
        updateWave(newWave)
        setEditActive(false)
        // setEditActive(false)
        // setNewWave({
        //     name: "",
        //     country: "",
        //     biggestSizeM: "",
        //     season: "",
        //     waveType: ""
        // })
    }

    const activateEdit = (event, element) => {
        event.preventDefault()
        setEditActive(true)
        setNewWave(element)
    }

    const eraseWave = (event, element) => {

        event.preventDefault()
        deleteWave(element)
    }

    return (
        <>
            <div>
                <button onClick={() => { getWaves() }}>
                    Waves list
                </button>
            </div>

            <div>
                <button onClick={(e) => {activateCreate(e)}}>
                    Create new Wave
                </button>
            </div>

            <div style={{display: "flex", flexDirection: "column", display: createActive || editActive ? "block" : "none"}}>
                {
                createActive ?
                <h2>Create new wave</h2>
                :
                <h2>Edit wave</h2>
                }
                
                <form onSubmit={(e) => {sendForm(e)}}>
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
                        { createActive ?
                        "Add wave"
                        :
                        "Update wave"
                        }
                    </button>
                </form>
            </div>
            <h1>Waves of the World</h1>
            {
                waves.map((e) => {
                    return(

                        <div style={{display: e.name ? "block" : "none"}}>
                            
                            <h2>{e.name}</h2>

                            <h4>{e.country}</h4>
                            <p>This is a {e.waveType}.</p>
                            <p>The biggest wave here is around {e.biggestSizeM} meters</p>
                            <p>The best time to surf is {e.season}.</p>
                            <button onClick={(evento) => {activateEdit(evento, e)}}>Edi</button>
                            <button onClick={(evento) => {eraseWave(evento, e)}}>Delete</button>

                            
                        </div>
                    )
                })
            }
        </>

    )
}
