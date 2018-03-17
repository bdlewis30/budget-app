INSERT INTO Bills (payee, due_date, occurrence, category, amount, acct_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;