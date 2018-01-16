import axios from 'axios';

const initialState = {
    user: {
        picture: 'http://placekitten.com/151/201'
    },
    bankAccts: {},
    creditAccts: {},
    liabilities: {},
    balance: {},
    bills: {},
    budget: {}
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}