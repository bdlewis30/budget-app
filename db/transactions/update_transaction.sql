UPDATE Transactions
SET start_bal = $1, date = $2, acct_name = $3, debits = $4, credits = $5, balance = $6
WHERE id = $7
AND acct_id = $8
RETURNING *;