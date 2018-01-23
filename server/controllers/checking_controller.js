module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {acct_name, acct_type, start_balance, acct_num, routing_num, memo} = req.body;

        db.accounts.checking.create_checking([acct_name, acct_type, start_balance, acct_num, routing_num, memo])
        .then((response) => res.status(200).send(response))
        .catch((error) => {
            console.log(error)
            res.status(500).send()
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.accounts.checking.read_all_checking()
        .then((checking) => res.status(200).send(checking))
        .catch(() => res.status(500).send())
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {params} = req

        db.accounts.checking.read_one_checking([params.id])
        .then((checking) => res.status(200).send(checking))
        .catch(() => res.status(500).send())
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {params, acct_name, acct_type, start_balance, acct_num, routing_num, memo} = req;

        db.accounts.checking.update_checking([params.id, params.acct_name, params.acct_type, params.start_balance, params.acct_num, params.routing_num, params.memo])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {params} = req;

        db.accounts.checking.delete_checking([params.id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
};