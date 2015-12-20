module.exports = function (sequelize, DataTypes) {

  var Election = sequelize.define('Election', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    electiondate: DataTypes.DATEONLY,
    liveresults: DataTypes.BOOLEAN,
    testresults: DataTypes.BOOLEAN
  }, {
    tableName: 'elections',
    timestamps: false
  });

  return Election;
};

