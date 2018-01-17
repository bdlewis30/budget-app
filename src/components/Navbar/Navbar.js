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
                        <Link to="/bank-accounts"><li>Bank Accounts</li></Link>
                        <Link to="/credit-accounts"><li>Credit Accounts</li></Link>
                        <Link to="/liabilities"><li>{`Loans & Liabilities`}</li></Link>
                        <Link to="/balance"><li>Balance</li></Link>
                        <Link to="/bills"><li>Bills</li></Link>
                        <Link to="/budget"><li>Budget</li></Link>
                    </ul>
                    <div onClick={this.slideMenu} className="ham-menu">
                        <div className={this.state.slide ? 'mobile-nav slide-menu' : 'mobile-nav'}>
                            <ul>
                                <Link to="/dashboard"><li className="li-mobile">Dashboard</li></Link>
                                <Link to="/bank-accounts"><li className="li-mobile">Bank Accounts</li></Link>
                                <Link to="/credit-accounts"><li className="li-mobile">Credit Accounts</li></Link>
                                <Link to="/liabilities"><li className="li-mobile">{`Loans & Liabilities`}</li></Link>
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