var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.Election.findAll().then(function (elections) {
    res.render('index', {
      title: 'Elections',
      elections: elections
    });
  });
});
