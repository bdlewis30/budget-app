UPDATE Balance_Sheet
SET date = $1,
SET acct_name = $2,
SET start_bal = $3,
SET debits = $4,
SET credits = $5
WHERE acct_id = $6
AND users_id = $7
RETURNING *;