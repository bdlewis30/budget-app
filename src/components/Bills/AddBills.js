import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';
import './Bills.css';

export class AddBills extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newBill: [],
            payee: '',
            due_date: '',
            occurrence: '',
            category: '',
            amount: '0.00',
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    handleInput = (e, input) => {
        if (input === 'payee') {
            this.setState({ payee: e })
        }
        if (input === 'due date') {
            this.setState({ due_date: e })
        }
        if (input === 'occurrence') {
            this.setState({ occurrence: e })
        }
        if (input === 'category') {
            this.setState({ category: e })
        }
        if (input === 'amount') {
            this.setState({ amount: e })
        }
    }

    saveBill = (e) => {
        const body = {
            payee: this.state.payee,
            due_date: this.state.due_date,
            occurrence: this.state.occurrence,
            category: this.state.category,
            amount: this.state.amount
        };
        axios.post(`/api/accounts/${this.props.acctId}/bills`, body)
        .then(res => {
            // this.setState({
            //     newBill: res.data
            // })
        }, error => {
            console.error(error)
        })
    }

    render() {
        const { payee, due_date, occurrence, category, amount } = this.state.newBill
        return (
            <div className="new-bills-container">
                <h2>Add Bills</h2>
                <form onSubmit={(e) => { e.preventDefault(); this.saveAccount(); }} />
                <label>Payee: </label><br />
                <input className="add-inputs" type="text" placeholder="First Bank" onChange={e => this.handleInput(e.target.value, 'payee')} /><br />
                <label>Due Date: </label><br />
                <input className="add-inputs" type="date" onChange={e => this.handleInput(e.target.value, 'due date')} /><br />
                <label>Occurrence: </label><br />
                <input className="add-inputs" type="text" placeholder="Monthly or Annually" onChange={e => this.handleInput(e.target.value, 'occurrence')} /><br />
                <label>Category: </label><br />
                <input className="add-inputs" type="text" placeholder="Rent, Auto, Utilities, etc." onChange={e => this.handleInput(e.target.value, 'category')} /><br />
                <label>Amount: </label><br />
                <input className="add-inputs" type="number" min="0.00" placeholder="$0.00" onChange={e => this.handleInput(e.target.value, 'amount')} /><br />
                <div className="addItemButtonContainer">
                    <button type="submit" className="add-bills-button" onClick={this.saveBill}>Submit</button>
                </div>
            </div >
        )
    }
}

function mapStatetoProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, { getUserInfo })(AddBills);