import {GET_USERS, USERS_ERROR, DELETE_USER, ADD_USER, UPDATE_USER} from '../types'
import axios from 'axios'

const baseUrl = `http://localhost:3002/students/`

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(baseUrl)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}


export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(baseUrl + id)
        .then(response => {
            dispatch( {
                type: DELETE_USER,
                payload: id
            })
        })
        .catch(error => {
            dispatch( {
                type: USERS_ERROR,
                payload: console.log(error),
            })
        })
    }
}

export const updateUser = (user, id) => {
    return (dispatch) => {
        axios.put(baseUrl + id, user)
        .then(response => {
                this.getUsers();
                dispatch( {
                    type: UPDATE_USER,
                    payload: id
                })
            })
            .catch(error => {
                dispatch( {
                    type: USERS_ERROR,
                    payload: console.log(error),
                })
            })
        }
    }

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(baseUrl, user)
                .then(response => {
                    this.getUsers();
                    dispatch( {
                        type: ADD_USER,
                        payload: user
                    })
                })
                .catch(error => {
                    dispatch( {
                        type: USERS_ERROR,
                        payload: console.log(error),
                    })
                })
                
            }
        }
    
