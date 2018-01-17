CREATE TABLE IF NOT EXISTS Bills (
    bill_id SERIAL PRIMARY KEY,
    dueDate DATE, 
    bill VARCHAR(180),
    amount MONEY 
);
