CREATE TABLE IF NOT EXISTS Bills (
    bill_id SERIAL PRIMARY KEY,
    dueDate DATE, 
    bill VARCHAR(180),
    amount MONEY,
    user_id INTEGER REFERENCES users (id)
);