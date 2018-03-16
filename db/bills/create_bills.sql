INSERT INTO Bills (payee, due_date, occurrence, category, amount)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;