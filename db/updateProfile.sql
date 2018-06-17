UPDATE users 
SET firstname = $1, lastname = $2, phone =$3, email =$4, bio = $5
WHERE authid = $6
RETURNING *