import React, {Component} from 'react';
import CreditLedger from './Ledger/Credit/CreditLedger';

export default class CreditAccts extends Component {

    render(){
        return(
            <div>
                <CreditLedger />
            </div>
        )
    }
}