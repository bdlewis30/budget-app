const express = require('express');
const router = express.Router();

const accounts_controller = require('../controllers/accounts_controller');
const balance_controller = require('../controllers/balance_controller');
const bills_controller = require('../controllers/bills_controller');
const budget_controller = require('../controllers/budget_controller');
const transactions_controller = require('../controllers/transactions_controller');

// Accounts
router.post('/accounts', accounts_controller.create)
router.get('/accounts', accounts_controller.getAll)
router.get('/accounts/:id', accounts_controller.getOne)
router.put('/accounts/:id', accounts_controller.update)
router.delete('/accounts/:id', accounts_controller.delete)

//Balance
// router.post('/accounts/:acctId/balance', balance_controller.create)
// router.get('/accounts/:acctId/balance-total', balance_controller.getTotal)
// router.get('/accounts/:acctId/balance-all', balance_controller.getAll)
// router.get('/accounts/:acctId/balance/:id', balance_controller.getOne)
// router.put('/accounts/:acctId/balance/:id', balance_controller.update)
// router.delete('/accounts/:acctId/balance/:id', balance_controller.delete)

//Bills
router.post('/accounts/:acctId/bills', bills_controller.create)
// router.get('/accounts/:acctId/bills', bills_controller.getAll)
// router.get('/accounts/:acctId/monthlyBills', bills_controller.monthlyBills)
// router.get('/accounts/:acctId/bills/:id', bills_controller.getOne)
// router.put('/accounts/:acctId/bills/:id', bills_controller.update)
// router.delete('/accounts/:acctId/bills/:id', bills_controller.delete)

//Budget
// router.post('/accounts/:acctId/budget', budget_controller.create)
// router.get('/accounts/:acctId/budget', budget_controller.getAll)
// router.get('/accounts/:acctId/budget/:id', budget_controller.getOne)
// router.put('/accounts/:acctId/budget/:id', budget_controller.update)
// router.delete('/accounts/:acctId/budget/:id', budget_controller.delete)

// Transactions
router.post('/accounts/:acctId/transactions', transactions_controller.create)
router.get('/accounts/:acctId/transactions', transactions_controller.getAll)
router.get('/accounts/:acctId/transactions/:id', transactions_controller.getOne)
router.put('/accounts/:acctId/transactions/:id', transactions_controller.update)
router.delete('/accounts/:acctId/transactions/:id', transactions_controller.delete)

module.exports = router;