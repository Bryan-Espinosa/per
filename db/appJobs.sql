INSERT INTO appliedjobs
    (jobid, userid)
VALUES
    ($1, $2)
RETURNING *;