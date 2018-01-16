import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo-wh.png';
import Profile from '../Profile/Profile';

export default class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <Navbar />
                    <Profile />
                    <h1>Dashboard</h1>
                </header>
            </div>
        )
    }
}