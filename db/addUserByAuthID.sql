INSERT INTO users
    (firstname, lastname, authid)
VALUES
    (
        $1, $2, $3
)
RETURNING *