DELETE FROM Budget
WHERE id = $1
AND acct_id = $2;