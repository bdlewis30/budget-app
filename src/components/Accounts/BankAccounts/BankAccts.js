import React, { Component } from 'react';
import './BankAccts.css';
// import { Link } from 'react-router-dom';

export default class BankAccts extends Component {

    render() {
        return (
            <div className="accts-container">
                <div>
                    <form>
                        Account Name: <input type="text" name="Account_Name" />
                        Starting Balance: <input type="text" name="Amount" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}