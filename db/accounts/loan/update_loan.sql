UPDATE Loan_Accounts
SET acct_name = $1,
SET acct_type = $2,
SET start_balance = $3,
SET apr = $4,
SET acct_num = $5,
SET memo = $6,
WHERE acct_id = $7;