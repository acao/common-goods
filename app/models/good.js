var Good = DS.Model.extend({
  title:      DS.attr('string'),
  type:        DS.hasMany('goodType'),
  sources:    function(){
    // return an array of sources from goodVariants attached to this Good
  },
  password:    DS.attr('string'),
  active:      DS.attr('boolean')
});
