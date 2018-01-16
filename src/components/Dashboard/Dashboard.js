import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';
import BankAccts from '../Accounts/BankAccounts/BankAccts';
import Header from '../Header/Header';
import Balance from '../Balance/Balance'
import Bills from '../Bills/Bills';
import Budget from '../Budget/Budget';

export default class Dashboard extends Component {

    // componentDidMount() {
    //     this.props.getUserInfo()
    // }

    render() {
        return (
            <div>
                <Header />
                <BankAccts />
                <Balance />
                <Bills />
                <Budget />
            </div>
        )
    }

}