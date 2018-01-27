UPDATE Bills
SET dueDate = $1, occurrence = $2, category = $3, amount = $4
WHERE id = $5
AND acct_id = $6