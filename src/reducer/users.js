import axios from 'axios';

const initialState = {
    user: {},
    creditAccts: [],
    checkingAccts: [],
    savingsAccts: [],
    loans: [],
    selectedAccount: 0,
    t_date: 0
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_ACCOUNTS = 'GET_ACCOUNTS';
const CHOOSE_ACCOUNT = 'CHOOSE_ACCOUNT';

export function getAccounts(type) {
    let prop;
    if (type === 'credit') { prop = 'creditAccts' }
    if (type === 'savings') { prop = 'savingsAccts' }
    if (type === 'checking') { prop = 'checkingAccts' }
    let promise = axios.get(`/api/accounts?acct_type=${type}`)
        .then(res => {
            return Object.assign({ 'data': res.data }, { prop })
        })
    return {
        type: GET_ACCOUNTS,
        payload: promise
    };
}

export function chooseAccount(id) {
    console.log(id)
    return {
        type: CHOOSE_ACCOUNT,
        payload: id.id
    };
}

export function getUserInfo() {
    const sessionUser = window.sessionStorage.getItem('user');
    if (sessionUser) {
        // console.log('session');
        return {
            type: GET_USER_INFO,
            payload: JSON.parse(sessionUser),
        };
    }
    let userData = axios.get('/auth/me').then(res => {
        // console.log(res);
        return res.data;
    },
        res => {
            window.location.href = '/';
        }
    )

    return {
        type: GET_USER_INFO,
        payload: userData,
    };
}

export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case GET_USER_INFO:
            // console.log(GET_USER_INFO);
            axios.defaults.headers.common['x-user-id'] = action.payload.id;
            return Object.assign({}, state, { user: action.payload })
        case GET_USER_INFO + '_FULFILLED':
            // console.log('fulfilled');
            axios.defaults.headers.common['x-user-id'] = action.payload.id;
            window.sessionStorage.setItem('user', JSON.stringify(action.payload))
            return Object.assign({}, state, { user: action.payload })
        case GET_ACCOUNTS + '_FULFILLED':
            // console.log(action.payload)
            return Object.assign({}, state, { [action.payload.prop]: action.payload.data })
        case CHOOSE_ACCOUNT:
            return Object.assign({}, state, { selectedAccount: action.payload })
        default:
            return state;
    }
}
