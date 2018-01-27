CREATE TABLE IF NOT EXISTS Bills (
    id SERIAL PRIMARY KEY,
    due_date DATE,
    occurrence VARCHAR(180),
    category VARCHAR(180), 
    amount MONEY,
    acct_id INTEGER REFERENCES Accounts (id)
);