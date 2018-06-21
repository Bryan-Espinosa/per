const getJobs = (req, res) => {
  req.app
    .get("db")
    .getJobs()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(500).json(err));
};
const appJobs = (req, res) => {
  req.app
    .get("db")
    .appJobs([req.body.jobid, req.user.userid])
    .then(job => {
      console.log(job[0]);
      res.status(200).json(job[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getAppJobs = (req, res) => {
  req.app
    .get("db")
    .getAppJobs(req.user.userid)
    .then(jobs => {
      console.log(`heeeereeee!`, jobs);
      res.status(200).json(jobs);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

const deleteJobs = (req, res) => {
  req.app
    .get("db")
    .deleteJobs(req.user.userid, req.params.jobid)
    .then(remove => res.status(200).json(remove))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
module.exports = {
  getJobs,
  appJobs,
  getAppJobs,
  deleteJobs
};
