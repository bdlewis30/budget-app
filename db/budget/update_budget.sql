UPDATE Budget
SET month = $1,
SET category = $2,
SET amount = $3
WHERE acct_id = $4
AND user_id = $5
RETURNING *;