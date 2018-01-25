CREATE TABLE IF NOT EXISTS Bills (
    acct_id SERIAL PRIMARY KEY,
    dueDate DATE,
    occurrence VARCHAR(180),
    acct_name VARCHAR(180),
    category VARCHAR(180), 
    amount MONEY,
    user_id INTEGER REFERENCES users (id)
);