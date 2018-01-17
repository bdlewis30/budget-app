INSERT INTO Bank_Accounts 
(acct_name, start_balance)
VALUES($1, $2)
RETURNING *;