import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slide: false,
        }
        this.slide = this.slide.bind(this);
    }

    slide() {
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
                    <div onClick={this.slide} className="ham-menu"></div>
                    <div className={this.state.slide ? 'mobile-nav slide' : 'mobile-nav'}>
                        <ul>
                            <Link to="/dashboard"><li className="li-mobile">Dashboard</li></Link>
                            <Link to="/bank-accounts"><li className="li-mobile">Bank Accounts</li></Link>
                            <Link to="/credit-accounts"><li className="li-mobile">Credit Accounts</li></Link>
                            <Link to="/liabilities"><li className="li-mobile">{`Loans & Liabilities`}</li></Link>
                            <Link to="/balance"><li className="li-mobile">Balance</li></Link>
                            <Link to="/bills"><li className="li-mobile">Bills</li></Link>
                            <Link to="/budget"><li className="li-mobile">Budget</li></Link>
                            <hr />
                            <div onClick={this.slide} className="slide">
                            <a className={this.state.slide}><li className="li-mobile">Close menu</li></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}