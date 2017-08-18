import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    // alert("OM");
    this.transitionTo('home');
  }
});
