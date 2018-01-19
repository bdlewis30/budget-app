import React, {Component} from 'react';
import './Accounts.css';
import axios from 'axios';

export default class CreditAccts extends Component {

    constructor(){
        super();

        this.state = {
            acct_name: '', 
            acct_type: '',
            start_balance: 0, 
            apr: 0,
            acct_num: 0, 
            memo: ''
        }

        this.addCreditAcct = this.addCreditAcct.bind(this);
    }

    addCreditAcct(){
        // let body = {acct_name: this.state.acc_name, acct_type: this.state.acct_type, start_balance: this.state.start_balance, apr: this.state.apr, acct_num: this.state.acct_num, memo: this.state.memo}
        axios.post('/api/accounts/credit', this.state).then(res => {
            console.lof(res)
            let creditAccount = res.data
            this.props.history.push(`/accounts/creditAccount${creditAccount.id}`)
        }).catch(console.log)
    }

    render(){
        let {acct_name, acct_type, start_balance, apr, acct_num, memo} =  this.state;

        return(
            <div className="accts-container">
                <h2>Add Account:</h2>
                <div className="form-new-acct">
                    <form onSubmit={(event) => this.submitToAccount(event)}>
                        <label>Account Name:</label>
                            <input required className="required" type="text" pattern="[a-zA-Z]*" name="Account_Name" placeholder="Account Name" /><br />
                        <label>Account Type:</label>
                            <input required className="required" type="text" name="Account_Type" placeholder="Account Type" /><br />
                        <label>Starting Balance:</label>
                            <input required className="required" onChange={(e) => this.financial(e.target.value)} onBlur={(e) => this.format(e.target.value)} value={this.state.addZeros} type="text" name="Starting_Balance" placeholder="0.00" /><br />
                        <label>Interest:</label>
                            <input type="number" name="Interest" min="0.000" step="0.001" placeholder="0.00%" /><br />
                        <label>Account Number:</label>
                            <input required type="number" name="Account_Number"  placeholder="Account Number"/><br />
                        <label>Routing Number:</label>
                            <input type="number" name="Routing_Number" placeholder="Routing number" /><br />
                        <label>Memo:</label><input type="text" name="Memo" placeholder="Memo" /><br />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}