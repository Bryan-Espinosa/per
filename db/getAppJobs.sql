SELECT *
FROM jobs j
    JOIN appliedjobs app ON j.jobid = app.jobid
WHERE app.userid =$1