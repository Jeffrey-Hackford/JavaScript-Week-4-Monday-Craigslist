import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['currentTime:asc'],
  sortedPosts: Ember.computed.sort('category.posts', 'sortBy'),
});
