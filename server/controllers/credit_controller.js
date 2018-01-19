module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {acct_name, acct_type, start_balance, apr, acct_num, memo} = req.body;

        db.accounts.credit.create_credit([acct_name, acct_type, start_balance, apr, acct_num, memo])
        .then(() => res.status(200).send())
        .catch((error) => {
            console.log(error)
            res.status(500).send()
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.accounts.credit.read_all_credit()
        .then((credit) => res.status(200).send(credit))
        .catch(() => res.status(500).send())
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {params} = req

        db.accounts.credit.read_one_credit([params.id])
        .then((credit) => res.status(200).send(credit))
        .catch(() => res.status(500).send())
    },
    update: (req, res) => {
        const db  = req.app.get('db')
        const {params, acct_name, acct_type, start_balance, apr, acct_num, memo} = req

        db.accounts.credit.update_credit([params.id, acct_name, acct_type, start_balance, apr, acct_num, memo])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {params} = req

        db.accounts.credit.delete_credit([params.id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
};