const Sightings = require('./Sightings');
const State = require('./State');
const Users = require('./Users');
const Comments = require('./Comments');

Sightings.belongsTo(State, {
  foreignKey: 'state_id',
  onDelete: 'CASCADE'
});

State.hasMany(Sightings, {
  foreignKey: 'state_id',
});

module.exports = { Sightings, State };