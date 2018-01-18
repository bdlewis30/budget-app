INSERT INTO Credit_Accounts (acct_name, acct_type, start_balance, apr, acct_num, memo) 
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;