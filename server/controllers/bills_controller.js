module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const { payee, due_date, occurrence, category, amount } = req.body
        const {acctId} = req.params

        db.bills.create_bills([payee, due_date, occurrence, category, amount, acct_id])
        .then((result) => {
            res.status(200).send(result)
        })
    }

    // monthlyBills: (req, res) => {
    //     const db = req.app.get('db')
    //     const { payee, due_date, amount} = req.body

    //     db.bills.read_monthly_bills(payee, due_date, amount, acct_id)
    //     .then(result => res.send(result))
    // }
    // getOne: (req, res) => {

    // },
    // update: (req, res) => {

    // },
    // delete: (req, res) => {

    // }
};