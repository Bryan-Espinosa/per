DELETE FROM appliedjobs
WHERE userid = $1 AND jobid=$2;
SELECT *
FROM jobs
    JOIN appliedjobs ON jobs.jobid = appliedjobs.jobid
WHERE appliedjobs.userid =$1