CREATE TABLE IF NOT EXISTS Budget (
    acct_id SERIAL PRIMARY KEY,
    month DATE,
    category VARCHAR(180),
    amount MONEY,
    user_id INTEGER REFERENCES users (id)
);