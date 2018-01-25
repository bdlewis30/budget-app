const express = require('express');
const router = express.Router();

const checking_controller = require('../controllers/checking_controller');
const savings_controller = require('../controllers/savings_controller');
const credit_controller = require('../controllers/credit_controller');
const loan_controller = require('../controllers/loan_controller');
const balance_controller = require('../controllers/balance_controller');
const bills_controller = require('../controllers/bills_controller');
const budget_controller = require('../controllers/budget_controller');

// Accounts
// router.post('/account', accounts_controller.create)
// router.get('/accounts', accounts_controller.getAll)
// router.get('/accounts/:acct_type', accounts_controller.getOne)

//Checking
router.post('/accounts/checking', checking_controller.create)
router.get('/accounts/checking-accounts', checking_controller.getAll)
router.get('/accounts/checking/:id', checking_controller.getOne)
router.put('/accounts/checking/:id', checking_controller.update)
router.delete('/account/checking/:id', checking_controller.delete)

//Saving
// router.post('/accounts/savings', savings_controller.create)
// router.get('/accounts/savings-accounts', savings_controller.getAll)
// router.get('/accounts/savings/:id', savings_controller.getOne)
// router.put('/accounts/savings/:id', savings_controller.update)
// router.delete('/accounts/savings/:id', savings_controller.delete)

//Credit
router.post('/accounts/credit', credit_controller.create)
router.get('/accounts/credit-accounts', credit_controller.getAll)
router.get('/accounts/credit/:id', credit_controller.getOne)
router.put('/accounts/credit/:id', credit_controller.update)
router.delete('/accounts/credit/:id', credit_controller.delete)

//Loans
// router.post('/accounts/loan', loan_controller.create)
// router.get('/accounts/loans', loan_controller.getAll)
// router.get('/accounts/loan/:id', loan_controller.getOne)
// router.put('/accounts/loan/:id', loan_controller.update)
// router.delete('/accounts/loan/:id', loan_controller.delete)

//Balance
// router.post('/balance', balance_controller.create)
// router.get('/balance-total', balance_controller.getTotal)
// router.get('/balance-all', balance_controller.getAll)
// router.get('/balance/:id', balance_controller.getOne)
// router.put('/balance/:id', balance_controller.update)
// router.delete('/balance/:id', balance_controller.delete)

//Bills
// router.post('/bills', bills_controller.create)
// router.get('/bills', bills_controller.getAll)
// router.get('/bills', bills_controller.next30Days)
// router.get('/bills/:id', bills_controller.getOne)
// router.put('/bills/:id', bills_controller.update)
// router.delete('/bills/:id', bills_controller.delete)

//Budget
// router.post('/budget', budget_controller.create)
// router.get('/budget', budget_controller.getAll)
// router.get('/budget/:id', budget_controller.getOne)
// router.put('/budget/:id', budget_controller.update)
// router.delete('/budget/:id', budget_controller.delete)

module.exports = router;