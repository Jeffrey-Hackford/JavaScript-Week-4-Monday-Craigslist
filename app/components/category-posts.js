import Ember from 'ember';

export default Ember.Component.extend({

  // sortBy: ['currentTime:asc'],
  // sortedPosts: Ember.coputed.sort('category.posts', 'sortBy'),

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
