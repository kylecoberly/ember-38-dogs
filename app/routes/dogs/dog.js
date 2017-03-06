import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get("model").findRecord(params.id);
  }
});
