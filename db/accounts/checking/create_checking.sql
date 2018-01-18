INSERT INTO Checking_Accounts (acct_name, acct_type, start_balance, acct_num, routing_num, memo) 
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;