module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {acct_name, acct_type, start_balance, apr, acct_num, memo} = req.body;
        const user_id = req.headers['x-user-id'];

        db.accounts.credit.create_credit([acct_name, acct_type, start_balance, apr, acct_num, memo, user_id])
        .then((data) => {
            res.status(200).send(data[0]);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send()
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const {params} = req;

        db.accounts.credit.read_all_credit([params.id, user_id])
        .then((credit) => res.status(200).send(credit))
        .catch(() => res.status(500).send())
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {params} = req
        const user_id = req.headers['x-user-id'];

        db.accounts.credit.read_one_credit([params.id, user_id])
        .then((credit) => res.status(200).send(credit))
        .catch(() => res.status(500).send())
    },
    update: (req, res) => {
        const db  = req.app.get('db')
        const {acct_name, acct_type, start_balance, apr, acct_num, memo} = req.body;
        const {params} = req;
        const user_id = req.headers['x-user-id'];
        
        db.accounts.credit.update_credit([acct_name, acct_type, start_balance, apr, acct_num, memo, params.id, user_id])
        .then((data) => res.status(200).send(data[0]))
        .catch(() => res.status(500).send())
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {params} = req
        const user_id = req.headers['x-user-id'];

        db.accounts.credit.delete_credit([params.id, user_id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
};