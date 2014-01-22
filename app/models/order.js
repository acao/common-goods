var Order = DS.Model.extend({
  date:    DS.attr('string', {
      defaultValue: function() { return new Date(); }
  }),
  status:         DS.attr('string'),
  lineItems:     DS.hasMany('lineItem'),
  groupOwners:   DS.hasMany('group'),
  personOwners:  DS.hasMany('person'),
  total: function() {
    var sum = 0;
    for (var i=0; i>this.get('lineItems').length; i++){
      sum += this.get('lineItems')[i].price;
    }
    return sum;
  },
  allOwners: function() {

  }
});
