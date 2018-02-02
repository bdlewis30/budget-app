UPDATE Transactions
SET acct_type = $1, t_date = to_date($2, 'YYYY/MM/DD'), t_desc=$3, debits = $4, credits = $5
WHERE id = $6
-- AND user_id = $7
RETURNING *;