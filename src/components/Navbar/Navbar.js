import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slide: false
        }
        this.slideMenu = this.slideMenu.bind(this);
    }

    slideMenu() {
        this.setState({
            slide: !this.state.slide
        })
    }

    render() {
        return (
            <div>
                <div className="ham-pad">
                    <ul className="desktopNav">
                        <Link to="/dashboard"><li>Dashboard</li></Link>
                        <div className="dropdown">
                            <li>Bank Accounts</li>
                            <ul className="dropdown-content">
                                <Link to="/accounts/checking-accounts"><li>Checking Accounts</li></Link>
                                <Link to="/accounts/savings-accounts"><li>Savings Accounts</li></Link>
                                <Link to="/accounts/credit-accounts"><li>Credit Accounts</li></Link>
                                <Link to="/accounts/loans"><li>Loans</li></Link>
                            </ul>
                        </div>
                        <Link to="/balance"><li>Balance</li></Link>
                        <Link to="/bills"><li>Bills</li></Link>
                        <Link to="/budget"><li>Budget</li></Link>
                    </ul>
                    <div onClick={this.slideMenu} className="ham-menu">
                        <div className={this.state.slide ? 'mobile-nav slide-menu' : 'mobile-nav'}>
                            <ul>
                                <Link to="/dashboard"><li>Dashboard</li></Link>
                                <Link to="/accounts/checking-accounts"><li>Checking Accounts</li></Link>
                                <Link to="/accounts/savings-accounts"><li>Savings Accounts</li></Link>
                                <Link to="/accounts/credit-accounts"><li>Credit Accounts</li></Link>
                                <Link to="/accounts/loans"><li>Loans</li></Link>
                                <Link to="/balance"><li>Balance</li></Link>
                                <Link to="/bills"><li>Bills</li></Link>
                                <Link to="/budget"><li>Budget</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}