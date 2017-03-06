import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  toys: DS.hasMany("toy", {async: true})
});
