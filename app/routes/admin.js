import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('Category', params);
      newCategory.save();
    }
  }
});
