import axios from 'axios';

const initialState = {
    user: {},
    accounts: {
        credit: [],
        checking: [],
        savings: [],
        loans: []
    }
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_CHECKING_ACCOUNTS = 'GET_CHECKING_ACCOUNTS';
const ADD_ACCOUNT = 'ADD_ACCOUNT';

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
        console.log(res);
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

// export function getCheckingAccounts() {
//     let checkingAccounts = axios.get('/api/accounts/checking-accounts').then(res => {
//         return res.data;
//     })
//     return {
//         type: GET_CHECKING_ACCOUNTS,
//         payload: checkingAccounts
//     }
// }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case ADD_ACCOUNT:
            switch (action.payload.acct_type) {
                case 'credit':
                    const credit = state.accounts.credit;
                    credit.push(action.payload);
                    return Object.assign({}, state, { accounts: { credit: credit }});
                case 'checking':
                    const checking = state.accounts.checking;
                    checking.push(action.payload);
                    return Object.assign({}, state, { accounts: { checking: checking }});
                case 'savings':
                    const saving = state.accounts.savings;
                    saving.push(action.payload);
                    return Object.assign({}, state, { accounts: { savings: saving }});
                case 'loans':
                    const loans = state.accounts.loans;
                    loans.push(action.payload);
                    return Object.assign({}, state, { accounts: { loans: loans }});
            }
            return state;
        default:
            return state;
    }
}
