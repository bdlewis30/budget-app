// module.exports = {
//     create: (req, res) => {
//         const db = req.app.get('db')
//         const {acct_name, acct_type, start_balance, interest, acct_num, routing_num, memo} = req.body;

//         db.add_bank_account([acct_name, acct_type, start_balance, interest, acct_num, routing_num, memo])
//         .then(() => res.status(200).send())
//         .catch((error) => {
//             console.log(error)
//             res.status(500).send()
//         })
//     },
//     getOne: (req, res) => {
//         const db = req.app.get('db')
//         const {params} = req;

//         db.get_bank_account([params.id])
//         .then((account) => res.status(200).send(account))
//         .catch(() => res.status(500).send())
//     },
//     getAll: (req, res) => {
//         const db = req.app.get('db')

//         db.get_bank_accounts()
//         .then((accounts) => res.status(200).send(accounts))
//         .catch(() => res.status(500).send())
//     },
//     update: (req, res) => {
//         const db = req.app.get('db')
//         const {acct_name, acct_type, start_balance, interest, acct_num, routing_num, memo, acct_id} = req;

//         db.update_bank_acct.update_account([acct_name, acct_type, start_balance, interest, acct_num, routing_num, memo])
//         .then(() => res.status(200).send())
//         .catch(() => res.status(500).send())
//     },
//     delete: (req, res) => {
//         const db = req.app.get('db')
//         const {params} = req

//         db.delete([params.id])
//         .then(() => res.status(200).send())
//         .catch(() => res.status(500).send())
//     }
// };