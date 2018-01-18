CREATE TABLE IF NOT EXISTS Bank_Accounts (
acct_id SERIAL PRIMARY KEY, 
acct_name VARCHAR(180), 
acct_type VARCHAR(12), 
start_balance MONEY, 
apr DECIMAL (5,3), 
acct_num NUMERIC(4), 
routing_num NUMERIC (9), 
memo VARCHAR(180) 
);