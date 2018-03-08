const handleErrors = (error, res) => {
    res.status(500).send(error);
}

const controller = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        const user_id = req.headers['x-user-id'];
        let promise;

        if (req.query.acct_type) {
            promise = db.accounts.read_accounts_type([user_id, req.query.acct_type])
        } else {
            promise = db.accounts.read_all_accounts([user_id])
        }
        promise.then((rows) => {
            res.status(200).send(rows)
        }).catch(error => handleErrors(error,res))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const {acct_type, acct_name, start_bal, apr_int, acct_num, routing_num, memo} = req.body

        db.accounts.create_account([acct_type, acct_name, start_bal, apr_int, acct_num, routing_num, memo, user_id])
        .then((rows) => {
            res.status(200).send(rows[0])
        }).catch(error => handleErrors(error,res))
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        
        db.accounts.read_one_account([id, user_id])
        .then((rows) => {
            res.status(200).send(rows[0])
        }).catch(error => handleErrors(error,res))
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        const {acct_type, acct_name, start_bal, apr_int, acct_num, routing_num, memo} = req.body

        db.accounts.update_account([acct_type, acct_name, start_bal, apr_int, acct_num, routing_num, memo, id, user_id])
        .then((rows) => {
            res.status(200).send(rows[0])
        }).catch(error => handleErrors(error,res))
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id);
        
        db.accounts.delete_account([id, user_id])
        .then((rows) => {
            res.status(200).send()
        }).catch(error => handleErrors(error,res))
    },
};

module.exports = controller;