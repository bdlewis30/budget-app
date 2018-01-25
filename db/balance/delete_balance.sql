DELETE * from Balance_Sheet
WHERE acct_id = $1
AND user_id = $2;