import React, {Component} from 'react';
import AddCreditAcct from './AddAccount/Credit/AddCreditAcct';
import CreditLedger from './Ledger/Credit/CreditLedger';

export default class CreditAccts extends Component {

    render(){
        return(
            <div>
                <AddCreditAcct />
                <CreditLedger />
            </div>
        )
    }
}