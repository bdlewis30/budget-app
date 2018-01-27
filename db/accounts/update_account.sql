UPDATE Accounts
SET acct_type = $1, acct_name = $2, amount = $3, apr_int = $4, acct_num = $5, routing_num = $6, memo = $7
WHERE id = $8
AND user_id = $9
RETURNING *;