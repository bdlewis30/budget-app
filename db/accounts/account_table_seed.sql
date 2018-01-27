CREATE TABLE IF NOT EXISTS Accounts (
    id SERIAL PRIMARY KEY,
    acct_type VARCHAR(180),
    acct_name VARCHAR(180),
    amount MONEY,
    apr_int DECIMAL(5,3),
    acct_num INTEGER,
    routing_num INTEGER,
    memo VARCHAR(180),
    user_id INTEGER REFERENCES users (id)
);