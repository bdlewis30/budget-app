import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {

    const sessionUser = window.sessionStorage.getItem('user');
    if (sessionUser) {
        console.log('session');
        return {
            type: GET_USER_INFO,
            payload: JSON.parse(sessionUser),
        };
    }
    let userData = axios.get('/auth/me').then(res => {
        console.log(res);
        return res.data;
    },
    res => {
        window.location.href='/';
    }
)

    return {
        type: GET_USER_INFO,
        payload: userData,
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            console.log(GET_USER_INFO);
            axios.defaults.headers.common['x-user-id'] = action.payload.id;
            return Object.assign({}, state, { user: action.payload })
        case GET_USER_INFO + '_FULFILLED':
            console.log('fulfilled');
            axios.defaults.headers.common['x-user-id'] = action.payload.id;
            window.sessionStorage.setItem('user',JSON.stringify(action.payload))
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}
