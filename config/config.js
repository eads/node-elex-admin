var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-elex'
    },
    port: 3000,
    db: 'postgres://localhost/elex'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-elex'
    },
    port: 3000,
    db: 'postgres://localhost/elex'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-elex'
    },
    port: 3000,
    db: 'postgres://localhost/elex'
  }
};

module.exports = config[env];
