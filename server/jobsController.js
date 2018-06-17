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
    .appJobs([req.body.jobid, req.body.userid])
    .then(job => res.status(200).json(job))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getAppJobs = (req, res) => {
  req.app
    .get("db")
    .getAppJobs(req.user.userid)
    .then(jobs => res.status(200).json(jobs))
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
