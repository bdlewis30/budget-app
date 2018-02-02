// import React, {Component} from 'react';

// export default class Ledger extends Component {

//     constructor(){
//         super();

//         this.state = {

//         }
//     }

//     toNumber(num) {
//         return Number(num.replace(/\$|,/, ''))
//     }

//     toFinance(num) {
//         return (
//             '$' + parseFloat(num)
//                 .toFixed(2)
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//         );
//     }

//     render() {
//         let total = 0
//         const rows = _.map(this.state.transactions, (t, index) => {
//             let currentBalance = this.toFinance(this.toNumber(t.start_bal) + total)
//             total += this.toNumber(t.credits) - this.toNumber(t.debits)
//             let date = new Date(t.t_date)
//         return (
//             <div>
//                 <tr className="dc-input" key={index}>
//                     <td><input className="dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={date.getFullYear() + '/' + Number(date.getMonth()) + 1 + '/' + date.getDate()} /></td>
//                     <td><input className="dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.t_desc} /></td>
//                     <td><input className="currency dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.debits} /></td>
//                     <td><input className="currency dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.credits} /></td>
//                     <td><input className="currency dc-input" defaultValue={currentBalance} /></td>
//                 </tr>
//             </div>
//         )
//     }
// }