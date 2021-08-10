import React, {useReducer, useState} from 'react'
import axios from 'axios'

import WavesContext from './WavesContext'
import WavesReducer from './WavesReducer'

const WavesState = (props) => { 


    const initialState = {
        waves: [{}],
    }

    const [ globalState, dispatch ] = useReducer(WavesReducer, initialState)

    const [ createActive, setCreateActive ] = useState(false)

    const [ newWave, setNewWave ] = useState({
        name: "",
        country: "",
        biggestSizeM: "",
        season: "",
        waveType: ""
    })

    const activateCreate = (event) => {
        event.preventDefault()
        setCreateActive(true)
    }



    const getWaves = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/waves`)
            const updatedWaves = res.data

            dispatch({
                type: "GET_WAVES",
                payload: updatedWaves
            })

        } catch (error) {

        }
    }

    const createWave = async (dataForm) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/waves/create`, dataForm)

            getWaves()
            setCreateActive(false)
            setNewWave({
                name: "",
                country: "",
                biggestSizeM: "",
                season: "",
                waveType: ""
            })
        } catch (error) {

        }
    }

    const updateWave = async (dataForm) => {
        const form = {
            waveId: dataForm._id,
            name: dataForm.name,
            country: dataForm.country,
            biggestSizeM: dataForm.biggestSizeM,
            season: dataForm.season,
            waveType: dataForm.waveType
        }
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/waves/update`, form )
            
            getWaves()

    }

    const deleteWave = async (dataForm) => {
        const form = {
            waveId: dataForm._id
        }
        console.log(dataForm)

        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/waves/delete`, form )
            
        getWaves()
    }

    return (
        <WavesContext.Provider
            value={{
                waves: globalState.waves,
                getWaves,
                createWave,
                activateCreate,
                createActive,
                setCreateActive,
                newWave,
                setNewWave,
                updateWave,
                deleteWave
            }}
        >
            {props.children}

        </WavesContext.Provider>
    )

}

export default WavesState