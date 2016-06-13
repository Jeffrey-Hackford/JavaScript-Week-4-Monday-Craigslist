import Ember from 'ember';

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
        category: this.get('category') ? this.get("category") : ""
      };
      this.sendAction('savePost', params);
      this.set("addNewPost", false);
    }
  }
});
