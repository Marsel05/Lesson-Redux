
const initialState = {
    cash: 0
}
    // action - эки ключ кабыл алат
    // 1.type, 2.payload
export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_MONEY":
            return {...state, cash: state.cash + action.payload}
        case "TAKE_MONEY":
            return {...state, cash: state.cash + action.payload}
        case "DELETE":
            return {...state, cash: 0}
        default:
            return state
    }
}














