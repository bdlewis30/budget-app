import React, { Component } from 'react';
import './Footer.css';
import logo from '../../assets/logo-wh.png';

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <p>Copyright &copy; 2018</p>
                </div>
                <div className="footer-logo">
                    <img className="footer-img" src={logo} alt="logo" />
                </div>

            </div>
        )
    }
}