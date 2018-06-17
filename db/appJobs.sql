INSERT INTO appliedjobs
    (jobid, userid)
VALUES
    ($1, $2);
SELECT *
FROM jobs
    JOIN appliedjobs ON jobs.jobid = appliedjobs.jobid
WHERE appliedjobs.userid =$1