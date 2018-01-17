CREATE TABLE IF NOT EXISTS Bank_Accounts (
    account_id SERIAL PRIMARY KEY,
    acct_name VARCHAR(180),
    start_balance MONEY
)
RETURNING *;