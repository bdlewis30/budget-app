INSERT INTO Accounts (acct_type, acct_name, amount, apr_int, acct_num, routing_num, memo, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;