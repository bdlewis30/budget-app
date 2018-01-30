SELECT t.*, a.acct_name, a.start_bal 
FROM Transactions t 
JOIN Accounts a ON t.acct_id = a.id
WHERE acct_id = $1;