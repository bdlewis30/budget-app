import React, { Component } from 'react';
import './CreditLedger.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../../reducer/users';

// get data from router.read_all_credit.sql

class CreditLedger extends Component {
    constructor() {
        super();

        this.state = {
            credit: [],
            date: [],
            accountName: [],
            debit: [],
            credit: [],
            balance: [],
            disabled: 'disabled',
            showInput: false
        }
    }

    componentDidMount() {
        let promise = axios.get('/api/accounts/credit-accounts')
        promise.then(res => {
            console.log(res)
            this.setState({
                credit: res.data
            })
        })
    }

    

    render() {
        return (
            <div className="credit-ledger-container">
                <section className="credit-ledger-header">
                    <h2>Credit Balance</h2>
                    <select>
                        <option value="Select Account">--Select Account--</option>
                        <option value="Beehive">Beehive</option>
                        <option value="First Tech">First Tech</option>
                    </select>
                    <br />
                    <br />
                </section>
                <button onClick={() => {
                    this.setState({
                        showInput: true
                    })
                }}
                >Add Account</button>
                {this.state.showInput ? <CreditLedger /> : null}
                <br /><br />
                <div className="ledger-columns">
                    <section>
                        <div className="column-header">Date</div>
                        <div>2017/3/07</div>
                        <div>2017/3/07</div>
                        <div>2017/3/08</div>
                        <div>2017/3/15</div>
                        <div>2017/3/27</div>
                        <div>2017/4/05</div>
                        <div>2017/4/16</div>
                        <div>2017/4/18</div>
                    </section>
                    <section>
                        <div className="column-header">Account</div>
                        <div className="overflow">Mountain America Is the best</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                        <div className="overflow">Mountain America</div>
                    </section>
                    <section>
                        <div className="column-header">Debit</div>
                        <div>-</div>
                        <div>500.00</div>
                        <div>100.00</div>
                        <div>200.00</div>
                        <div>150.00</div>
                        <div>50.00</div>
                        <div>-</div>
                        <div>-</div>
                    </section>
                    <section>
                        <div className="column-header">Credit</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>20.00</div>
                        <div>15.00</div>
                    </section>
                    <section>
                        <div className="column-header">Bal.</div>
                        <div>2000.00</div>
                        <div>1500.00</div>
                        <div>1400.00</div>
                        <div>1200.00</div>
                        <div>1050.00</div>
                        <div>1000.00</div>
                        <div>1020.00</div>
                        <div>1035.00</div>
                    </section>
                </div>
            </div >
        )
    }
}


function mapStatetoProps(state) {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, { getUserInfo })(CreditLedger);