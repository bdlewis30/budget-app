CREATE TABLE IF NOT EXISTS Checking_Accounts (
acct_id SERIAL PRIMARY KEY, 
acct_name VARCHAR(180), 
acct_type VARCHAR(12), 
start_balance MONEY, 
acct_num NUMERIC(4), 
routing_num NUMERIC (9), 
memo VARCHAR(180),
user_id INTEGER REFERENCES users (id)
);