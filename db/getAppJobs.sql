SELECT *
FROM jobs
    JOIN appliedjobs ON jobs.jobid = appliedjobs.jobid
WHERE appliedjobs.userid =$1

