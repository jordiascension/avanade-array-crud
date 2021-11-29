import {GET_USERS,DELETE_USER,ADD_USER,UPDATE_USER} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload
        }
        case DELETE_USER:
            return {
                ...state, 
                users: state.users.filter(i => i.id !== action.id)
              }
        case ADD_USER:
            const newId = state.users[state.users.length-1] + 1
            return {
                ...state,
                users: {
                    [newId] : {
                        id: newId,
                        name: action.name
                      }
                    }
                }
        case UPDATE_USER:
            return { ...state, id: action.payload }
        default: return state
    }

}