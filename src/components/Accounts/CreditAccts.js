import React, {Component} from 'react';
import AddCreditAcct from './AddAccount/AddCreditAcct';
import CreditLedger from './Ledger/Credit/CreditLedger';

export default class CreditAccts extends Component {

    render(){
        return(
            <div>
                <CreditLedger />
                <AddCreditAcct />
            </div>
        )
    }
}