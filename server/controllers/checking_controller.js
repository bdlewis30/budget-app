module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {acct_name, acct_type, start_balance, acct_num, routing_num, memo} = req.body;

        db.accounts.checking.create_checking([acct_name, acct_type, start_balance, acct_num, routing_num, memo])
        .then(() => res.status(200).send())
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
    }//,
    // update: (req, res) => {
    //     const db = req.app.get('db')

    // },
    // delete: (req, res) => {
    //     const db = req.app.get('db')


    // }
};