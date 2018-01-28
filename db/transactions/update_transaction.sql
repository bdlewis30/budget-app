UPDATE Transactions
SET acct_type = $1, t_date = $2, acct_name = $3, debits = $4, credits = $5, balance = $6
WHERE id = $7
AND user_id = $8
RETURNING *;