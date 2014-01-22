var lineItem = DS.Model.extend({
  title:       DS.attr('string'),
  type:        DS.hasMany('goodType'),
  source:      DS.belongsTo('source'),
  good:        DS.belongsTo('good')
});
