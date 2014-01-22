var Group = DS.Model.extend({
  title:       DS.attr('string'),
  type:        DS.attr('string'),
  memberships: function() {
    // return aggregate
  },
  active:      DS.attr('boolean')
});
