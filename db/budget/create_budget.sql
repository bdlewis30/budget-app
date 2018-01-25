INSERT INTO Bills (acct_id, dueDate, occurrence, acct_name, category, amount, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;