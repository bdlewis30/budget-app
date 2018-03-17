import React, { Component } from 'react';
import './Bills.css';
import AddBills from './AddBills';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';

export class Bills extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showAddBills: false,
            bills: []
        }
        this.getBills(props.acctId);
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    getBills = (acctId) => {
        if (acctId === 0) {
            return 'You do not have any bills due in the next 30 days.'
        }
        axios.get(`/api/accounts/${this.props.acctId}/monthlyBills`).then((res) => {
            this.setState({ bills: res.data })
        })
    }

    openAddBills = () => {
        this.setState({
            showAddBills: true
        })
    }

    closeAddBills = () => {
        alert('Success! The bill has been added.')
        this.setState({
            showAddBills: false
        })
    }

    render() {
        const billsList = _.map(this.state.bills, (bills, index) => {
            console.log('Bills payee:', bills.payee)
            return (
                <tr key={index}>
                    <td key={bills.id} value={bills.id}>{bills.payee}</td>
                    <td key={bills.id} value={bills.id}>{bills.due_date}</td>
                    <td key={bills.id} value={bills.id}>{bills.amount}</td>
                </tr>
            )
        })

        return (
            <div>
                <section className="bills-container">
                    <h1 className="bills-title">Bills Next 30 Days</h1>
                    <div className="total">$2,400.00</div>
                    <section className="bills-list-container">
                        <br />
                        <button className="add-bills-button" onClick={this.openAddBills}>Add Bills</button>
                        {this.state.showAddBills ? <AddBills action={this.closeAddBills} /> : null}
                        <table className="bills-table">
                            <tbody>
                                <tr>
                                    <th>Payee</th>
                                    <th>Due Date</th>
                                    <th>Amount</th>
                                </tr>
                                {billsList}
                            </tbody>
                        </table>
                    </section>
                </section>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, { getUserInfo })(Bills);