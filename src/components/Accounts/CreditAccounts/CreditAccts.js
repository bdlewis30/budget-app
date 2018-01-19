import React, {Component} from 'react';
import './CreditAccts.css';
import axios from 'axios';

export default class CreditAccts extends Component {

    constructor(){
        super();

        this.state = {
            acct_name: '', 
            acct_type: '',
            start_balance: 0, 
            acct_num: 0,
            routing_num: 0, 
            memo: ''
        }

        this.addCheckingAcct = this.addCheckingAcct.bind(this);
    }

    addCheckingAcct(){
        axios.get()
    }

    render(){
        return(
            <div>
                <h1>Credit Accounts</h1>
                <button onClick={() => this.addCheckingAcct()}></button>
            </div>
        )
    }
}