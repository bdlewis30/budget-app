import React, { Component } from 'react';
import './Dashboard.css';
import AccountsSnip from '../Snippets/AccountsSnip/AccountSnip';
import BalanceSnip from '../Snippets/BalanceSnip/BalanceSnip';
import BillsSnip from '../Snippets/BillsSnip/BillsSnip';
import BudgetSnip from '../Snippets/BudgetSnip/BudgetSnip';

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <AccountsSnip />
                <BalanceSnip />
                <BillsSnip />
                <BudgetSnip />
            </div>
        )
    }

}