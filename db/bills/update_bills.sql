UPDATE Bills
SET dueDate = $1,
SET occurrence = $2,
SET acct_name = $3,
SET category = $4, 
SET amount = $5
WHERE acct_id = $6
AND user_id = $7