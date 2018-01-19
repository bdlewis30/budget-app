import React, { Component } from 'react';
import './Accounts.css';


export default class BankAccts extends Component {

    constructor() {
        super();

        this.state = {
            addZeros: 0.00,
            apr: 0.000
        }
        this.financial = this.financial.bind(this);
    }

    financial(value) {
        this.setState({
            addZeros: value
        })
    }

    format(value) {
        this.setState({
            addZeros: '$' +
                parseFloat(value.replace(/(,|\$)/g, "")) //goes back to number
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
    }

    // submitToAccount(event){
    //     alert('Form has been submitted')
    //     event.preventDefault()
    //     axios.post('url',).then()
    // }



    render() {
        return (
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