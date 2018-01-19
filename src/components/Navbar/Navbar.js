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
                        <div class="dropdown">
                            <li>Bank Accounts</li>
                            <ul class="dropdown-content">
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
                                <Link to="/dashboard"><li className="li-mobile">Dashboard</li></Link>
                                <li className="li-mobile">Bank Accounts</li>
                                <Link to="/accounts/checking-accounts"><li className="li-mobile sub-menu">Checking Accounts</li></Link>
                                <Link to="/accounts/savings-accounts"><li className="li-mobile sub-menu">Savings Accounts</li></Link>
                                <Link to="/accounts/credit-accounts"><li className="li-mobile sub-menu">Credit Accounts</li></Link>
                                <Link to="/accounts/loans"><li className="li-mobile sub-menu">Loans</li></Link>
                                <Link to="/balance"><li className="li-mobile">Balance</li></Link>
                                <Link to="/bills"><li className="li-mobile">Bills</li></Link>
                                <Link to="/budget"><li className="li-mobile">Budget</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}