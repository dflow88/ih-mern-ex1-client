import React, {useReducer} from 'react'
import axios from 'axios'

import WavesContext from './WavesContext'
import WavesReducer from './WavesReducer'

const WavesState = (props) => { 


    const initialState = {
        waves: [{}],
    }

    const [ globalState, dispatch ] = useReducer(WavesReducer, initialState)

    const getWaves = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/waves`)
            const updatedWaves = res.data
            console.log(res)

            dispatch({
                type: "GET_WAVES",
                payload: updatedWaves
            })

        } catch (error) {

        }
    }

    // const createWave = async () => {
    //     try {



    //     } catch (error) {

    //     }
    // }

    return (
        <WavesContext.Provider
            value={{
                waves: globalState.waves,
                getWaves//,
                // createWave
            }}
        >
            {props.children}

        </WavesContext.Provider>
    )

}

export default WavesState