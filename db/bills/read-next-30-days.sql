SELECT * FROM Bills
WHERE month = $1
AND acct_id = $2
AND user_id = $3