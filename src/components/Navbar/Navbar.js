import React, { Component } from 'react';
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
                <div>
                    <ul className="desktopNav">
                        <li><a href="http://localhost:3000">Dashboard</a></li>
                        <li><a href="http://localhost:3000">Bank Accounts</a></li>
                        <li><a href="http://localhost:3000">Credit Accounts</a></li>
                        <li><a href="http://localhost:3000">{`Loans & Liabilities`}</a></li>
                        <li><a href="http://localhost:3000">Balance</a></li>
                        <li><a href="http://localhost:3000">Bills</a></li>
                        <li><a href="http://localhost:3000">Budget</a></li>
                    </ul>
                    <div onClick={this.slide} className="ham-menu"></div>
                    <div className={this.state.slide ? 'mobile-nav slide' : 'ham-menu'}></div>
                </div>
            </div>
        )
    }
}