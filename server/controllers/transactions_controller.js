const handleErrors = (error, res) => {
    res.status(500).send(error);
}

const controller = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        const acct_id = parseInt(req.params.acctId);

        db.transactions.read_all_transactions([acct_id])
        .then((rows) => {
            res.status(200).send(rows)
        }).catch(error => handleErrors(error,res))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const {acct_type, t_date, acct_name, debits, credits } = req.body
        const {acctId} = req.params

        db.transactions.create_transaction([acct_type, t_date, acct_name, debits, credits, acctId])
        .then((rows) => {
            res.status(200).send(rows)
        })//.catch(error => handleErrors(error,res))
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        
        db.transactions.read_one_transaction([id, acct_id, user_id])
        .then((rows) => {
            res.status(200).send(rows[0])
        }).catch(error => handleErrors(error,res))
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        const {acct_type, t_date, acct_name, debits, credits} = req.body

        db.transactions.update_transactions([acct_type, t_date, acct_name, debits, credits, user_id])
        .then((rows) => {
            res.status(200).send(rows[0])
        }).catch(error => handleErrors(error,res))
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        
        db.transactions.delete_transaction([id, user_id])
        .then((rows) => {
            res.status(200).send()
        }).catch(error => handleErrors(error,res))
    },
};

module.exports = controller;