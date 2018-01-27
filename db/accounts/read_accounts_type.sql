SELECT * FROM Accounts
WHERE user_id = $1
AND acct_type = $2;