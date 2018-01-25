SELECT acct_name, balance FROM Balance_Sheet
WHERE acct_id = $1
AND USER_ID = $2;