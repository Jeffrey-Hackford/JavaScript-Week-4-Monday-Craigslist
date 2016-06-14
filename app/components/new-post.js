import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showPostForm() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        title: this.get('title') ? this.get('title') : "",
        content: this.get('content') ? this.get('content') : "",
        image: this.get('image') ? this.get('image') : "",
        currentTime: moment().unix(),
        displayedTime: moment().format('LLLL'),
        category: this.get('category')
      };
      this.sendAction('savePost', params);
      this.set("addNewPost", false);
    }
  }
});
