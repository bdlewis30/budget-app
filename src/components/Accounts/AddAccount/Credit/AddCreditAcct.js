import React, {Component} from 'react';
import './AddCreditAcct.css';
import axios from 'axios';

export default class AddCreditAcct extends Component {

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

        this.postCreditAcct = this.postCreditAcct.bind(this);
    }

    postCreditAcct(e){
        e.preventDefault();
        axios.post('/api/accounts/credit', this.state).then(res => {
            console.log(res)
            let creditAccount = res.data
            
        }).catch(console.log)
    }

    render(){
        let {acct_name, acct_type, start_balance, apr, acct_num, memo} =  this.state;

        return(
            <div className="accts-container">
                <h2>Add Account:</h2>
                <div className="form-new-acct">
                    <form>
                        <label>Account Name:</label>
                            <input required className="required" type="text" pattern="^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$" name="Account_Name" placeholder="Account Name" /><br />
                        <label>Account Type:</label>
                            <input required className="required" type="text" name="Account_Type" defaultValue="Credit" /><br />
                        <label>Starting Balance:</label>
                            <input required className="required" type="text" name="Starting_Balance" placeholder="0.00" /><br />
                        <label>APR:</label>
                            <input type="number" name="Interest" min="0.000" step="0.001" placeholder="0.00%" /><br />
                        <label>Account Number:</label>
                            <input required type="number" name="Account_Number"  placeholder="Account Number"/><br />
                        <label>Memo:</label><input type="text" name="Memo" placeholder="Memo" /><br />
                        <button onClick={(e) => this.postCreditAcct(e)}>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}