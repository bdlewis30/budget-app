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
        if(window.location.hash === '#/bank-accounts'){
            return 'Bank Accounts'
        }
        else {
            return 'Dashboard'
        }
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