var Membership = DS.Model.extend({
  group:         DS.belongsTo('group'),
  person:        DS.belongsTo('person'),
  type:          DS.attr('string'),
  roles:         DS.attr('array'),

});
