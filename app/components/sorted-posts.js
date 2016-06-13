import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['currentTime:desc'],
  sortedPosts: Ember.computed.sort('category.posts', 'sortBy'),
});
