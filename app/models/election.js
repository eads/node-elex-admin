module.exports = function (sequelize, DataTypes) {

  var Election = sequelize.define('Election', {
    electiondate: DataTypes.DATEONLY,
    liveresults: DataTypes.BOOLEAN,
    testresults: DataTypes.BOOLEAN
  }, {
    tableName: 'elections',
    timestamps: false
  });

  return Election;
};

