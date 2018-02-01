CREATE TABLE IF NOT EXISTS Transactions (
id SERIAL PRIMARY KEY,
acct_type VARCHAR(180),
t_date DATE,
t_desc VARCHAR(180),
debits MONEY,
credits MONEY,
acct_id INTEGER REFERENCES accounts (id)
);