UPDATE Transactions
SET acct_type = $1, t_date = $2, acct_name = $3, debits = $4, credits = $5
WHERE id = $6
AND user_id = $7
RETURNING *;