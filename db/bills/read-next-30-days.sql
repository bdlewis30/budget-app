SELECT * FROM Bills
WHERE due_date<=date_trunc('day',now()+interval '1 month')
AND acct_id = $1;