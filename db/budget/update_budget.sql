UPDATE Budget
SET month = $1, category = $2, amount = $3
WHERE id = $4
AND acct_id = $5
RETURNING *;