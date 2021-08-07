// REDUCER ES UNA FUNCION AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

export default (globalState, action) => {

    switch(action.type) {
        // cada caso retorna un cmabio en el estado globalState
        case "GET_WAVES":
            return {
                ...globalState,
                waves: action.payload
            }

        // default
        default:
            return globalState
    }




}