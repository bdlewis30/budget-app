INSERT INTO Savings_Accounts (acct_name, acct_type, start_balance, interest, acct_num, routing_num, memo, user_id) 
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;