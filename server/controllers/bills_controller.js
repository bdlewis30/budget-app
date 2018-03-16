module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const { payee, due_date, occurrence, category, amount } = req.body

        db.bills.create_bills(payee, due_date, occurrence, category, amount)
        .then(result => res.send(result))
    },

    // getAll: (req, res){

    // },
    // getOne: (req, res){

    // },
    // update: (req, res){

    // },
    // delete: (req, res){

    // }
};