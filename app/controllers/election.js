var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/:id', function (req, res, next) {
  db.Election.findById(req.params.id).then(function (election) {
    res.render('election', {
      date: election.electiondate,
      election: election
    });
  });
});
