DELETE * FROM Bills
WHERE acct_id = $1
AND user_id = $2;