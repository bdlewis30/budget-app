CREATE TABLE IF NOT EXISTS Transactions (
id SERIAL PRIMARY KEY,
acct_type VARCHAR(180),
start_bal MONEY,
t_date DATE,
acct_name VARCHAR(180),
debits MONEY,
credits MONEY,
balance MONEY,
acct_id INTEGER REFERENCES accounts (id)
);