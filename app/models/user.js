var Person = DS.Model.extend({
  firstName:    DS.attr('string'),
  lastName:     DS.attr('string'),
  userName:     DS.attr('string'),
  password:     DS.attr('string'),
  active:       DS.attr('boolean')
});
