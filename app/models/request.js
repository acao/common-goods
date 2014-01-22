var Request = DS.Model.extend({
  goods:    DS.hasMany('good'),
  variants: DS.hasMany('goodVariant'),
  sources:  DS.hasMany('source'),
  title:    DS.attr('string'),
  status:   DS.attr('string'),
  notes:    DS.attr('string'),
});
