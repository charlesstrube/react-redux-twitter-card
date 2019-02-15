import ACTIONS from '../actions-type/user';
export const users = (state = [], action) => {
    let index
    switch (action.type) {
        case ACTIONS.USER.CREATE:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    alias: action.alias
                }
            ]
        case ACTIONS.USER.DELETE:
            index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1, state.length)
            ]
        default:
            return state
    }
}