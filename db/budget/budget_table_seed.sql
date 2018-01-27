CREATE TABLE IF NOT EXISTS Budget (
    id SERIAL PRIMARY KEY,
    month DATE,
    category VARCHAR(180),
    amount MONEY,
    acct_id INTEGER REFERENCES Accounts (id)
);