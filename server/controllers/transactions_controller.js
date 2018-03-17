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
        const {acct_type, t_date, t_desc, debits, credits } = req.body
        const {acctId} = req.params
        db.transactions.create_transaction([acct_type, t_date, t_desc, debits, credits, acctId])
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
        const acctId = parseInt(req.params.acctId);
        const {acct_type, t_date, t_desc, debits, credits} = req.body
        db.transactions.read_one_transaction(id, acctId).then((results) => {
            console.log(results)
            db.transactions.update_transaction([acct_type || results[0].acct_type, t_date || results[0].t_date, t_desc || results[0].t_desc, debits || results[0].debits, credits || results[0].credits, id])
            .then((rows) => {
                res.status(200).send(rows[0])
            })

        })

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