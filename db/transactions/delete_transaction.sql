DELETE from Transactions
WHERE id = $1
AND acct_id = $2;