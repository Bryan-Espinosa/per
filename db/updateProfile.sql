UPDATE users 
SET firstname = $1, lastname = $2, email =$3, bio = $4
WHERE authid = $5
RETURNING *