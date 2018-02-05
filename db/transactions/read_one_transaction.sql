SELECT t.*, a.acct_name 
FROM Transactions t 
JOIN Accounts a ON t.acct_id = a.id
WHERE t.id = $1
AND t.acct_id = $2;