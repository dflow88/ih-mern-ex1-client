// REDUCER ES UNA FUNCION AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

export default (globalState, action) => {

    switch(action.type) {
        // cada caso retorna un cmabio en el estado globalState
        case "OBTENER_PROYECTOS":
            return {
                ...globalState,
                proyectos: action.payload
            }

        // default
        default:
            return globalState
    }




}