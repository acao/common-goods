export default Ember.Component.extend({
  classNames: ['pretty-color'],
  attributeBindings: ['style'],
  style: function(){
    return 'colour: ' + this.get('name') + ';';
  }.property('name')
});
