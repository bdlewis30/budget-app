INSERT INTO Loan_Accounts (acct_name, acct_type, start_balance, apr, acct_num, memo, user_id) 
VALUES($1, $2, $3, $4, $5, $6, $7)
RETURNING *;