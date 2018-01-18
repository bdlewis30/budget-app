UPDATE Bank_Account
SET acct_name = $1,
SET acct_type = $2,
SET start_balance = $3,
SET interest = $4,
SET acct_num = $5,
SET routing_num = $6,
SET mem0 = $7,
WHERE acct_id = $8