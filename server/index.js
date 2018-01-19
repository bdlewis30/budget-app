require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , cors = require('cors');

const checking_controller = require('./controllers/checking_controller');
const savings_controller = require('./controllers/savings_controller');
const credit_controller = require('./controllers/credit_controller');
const loan_controller = require('./controllers/loan_controller');
const balance_controller = require('./controllers/balance_controller');
const bills_controller = require('./controllers/bills_controller');
const budget_controller = require('./controllers/budget_controller');

const {
    AUTH_DOMAIN,
    AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET,
    AUTH_CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    let { name, email, picture, user_id } = profile;
    const db = app.get('db');
    db.find_user([user_id]).then(function (user) {
        if (!user[0]) {
            db.create_user([
                name,
                email,
                picture,
                user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
        else {
            return done(null, user[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    return done(null, id)
})

passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id])
        .then(function (user) {
            return done(null, user[0])
        })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found.');
    }
    else {
        res.status(200).send(req.user);
    }
})

app.get('auth/logout', function (req, res) {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

//Checking
app.post('/api/accounts/checking', checking_controller.create)
app.get('/api/accounts/checking', checking_controller.getAll)
app.get('/api/accounts/checking/:id', checking_controller.getOne)
// app.put('/api/accounts/checking/:id', checking_controller.update)
// app.delete('/api/account/checking/:id', checking_controller.delete)

// //Saving
// app.post('/api/accounts/savings', savings_controller.create)
// app.get('/api/accounts/savings', savings_controller.getAll)
// app.get('/api/accounts/savings/:id', savings_controller.getOne)
// app.put('/api/accounts/savings/:id', savings_controller.update)
// app.delete('/api/accounts/savings/:id', savings_controller.delete)

// //Credit
// app.post('/api/accounts/credit', credit_controller.create)
// app.get('/api/accounts/credit', credit_controller.getAll)
// app.get('/api/accounts/credit/:id', credit_controller.getOne)
// app.put('/api/accounts/credit/:id', credit_controller.update)
// app.delete('/api/accounts/credit/:id', credit_controller.delete)

// //Loans
// app.post('/api/accounts/loans', loan_controller.create)
// app.get('/api/accounts/loans', loan_controller.getAll)
// app.get('/api/accounts/loans/:id', loan_controller.getOne)
// app.put('/api/accounts/loans/:id', loan_controller.update)
// app.delete('/api/accounts/loans/:id', loan_controller.delete)

// //Balance
// app.post('/api/balance', balance_controller.create)
// app.get('/api/balance', balance_controller.getTotal)
// app.get('/api/balance', balance_controller.getAll)
// app.get('/api/balance/:id', balance_controller.getOne)
// app.put('/api/balance/:id', balance_controller.update)
// app.delete('/api/balance/:id', balance_controller.delete)

// //Bills
// app.post('/api/bills', bills_controller.create)
// app.get('/api/bills', bills_controller.getAll)
// app.get('/api/bills', bills_controller.next30Days)
// app.get('/api/bills/:id', bills_controller.getOne)
// app.put('/api/bills/:id', bills_controller.update)
// app.delete('/api/bills/:id', bills_controller.delete)

// //Budget
// app.post('/api/budget', budget_controller.create)
// app.get('/api/budget', budget_controller.getAll)
// app.get('/api/budget/:id', budget_controller.getOne)
// app.put('/api/budget/:id', budget_controller.update)
// app.delete('/api/budget/:id', budget_controller.delete)

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});