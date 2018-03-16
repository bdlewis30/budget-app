CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(180),
    email VARCHAR(180),
    picture TEXT,
    auth_id TEXT,
    user_id INTEGER REFERENCES Accounts (id)
)