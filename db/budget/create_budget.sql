INSERT INTO Budget (month, category, amount, acct_id)
VALUES ($1, $2, $3, $4)
RETURNING *;