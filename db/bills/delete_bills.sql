DELETE FROM Bills
WHERE id = $1
AND acct_id = $2;