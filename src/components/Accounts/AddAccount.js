import React, {Component} from 'react';


export default class AddAccount extends Component {

   render(){
       return(
           <div>
               <h2>Add Account:</h2
               <div className="form-new-acct">
                    <form id="accounts">
                        <label>Date:</label>
                        <input required type="date" name="Date" placeholder="yyyy/mm/dd" /><br />
                        <label>Account Name:</label>
                        <input required type="text" pattern="^[a-zA-Z]$" name="Account_Name" placeholder="Account Name" /><br />
                        <label>APR:</label>
                        <input type="number" step="any" min="0" name="APR" placeholder="0.00%" disabled={this.state.disabled} /><br />
                        <label>Account Number:</label>
                        <input required type="number" name="Account_Number" placeholder="Account Number" /><br />
                        <label>Memo:</label><input type="text" name="Memo" placeholder="Memo" /><br />
                        <button onClick={(e) => this.postCreditAcct(e)}>Submit</button>
                    </form>
                </div>
           </div>
       )
   }
}