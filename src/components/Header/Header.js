import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

export default class Header extends Component {

    constructor(){
        super();

        this.headingText = this.headingText.bind(this);
    }

    headingText(){
        if(window.location.hash === '#/accounts/checking-accounts') {
            return 'Checking Accounts'
        } 
        else if(window.location.hash === '#/accounts/savings-accounts') {
            return 'Savings Accounts'
        } 
        else if(window.location.hash === '#/accounts/credit-accounts') {
            return 'Credit Accounts'
        }
        else if(window.location.hash === '#/accounts/loans') {
            return 'Loans & Liabilities'
        }
        else if(window.location.hash === '#/balance') {
            return 'Balance Sheet'
        }
        else if (window.location.hash === '#/bills') {
            return 'Bills'
        }
        else if(window.location.hash === '#/budget') {
            return 'Budget'
        }
        else return 'Dashboard'
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar />
                    <Profile />
                    <h1>{this.headingText()}</h1>
                </header>
            </div>
        )
    }
}