SELECT t.*, a.acct_name FROM Transactions t JOIN Accounts a ON t.acct_id = a.id
WHERE acct_id = $1;