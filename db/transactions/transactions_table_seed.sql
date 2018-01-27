CREATE TABLE IF NOT EXISTS Transactions (
id SERIAL PRIMARY KEY,
start_bal MONEY,
date DATE,
acct_name VARCHAR(180),
debits MONEY,
credits MONEY,
balance MONEY,
acct_id INTEGER REFERENCES accounts (id)
);