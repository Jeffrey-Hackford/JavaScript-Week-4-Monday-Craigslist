import Ember from 'ember';

export default Ember.Component.extend({

  showing: false,
  actions: {
    showDetails: function() {
      this.set('showing', true);
    },
    hideDetails: function() {
      this.set('showing', false);
    }
  }
});
