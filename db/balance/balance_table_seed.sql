CREATE TABLE IF NOT EXISTS Balance_Sheet (
acct_id SERIAL PRIMARY KEY,
date DATE,
acct_name VARCHAR(180),
start_bal MONEY,
debits MONEY,
credits MONEY,
balance MONEY,
user_id INTEGER REFERENCES users (id)
);