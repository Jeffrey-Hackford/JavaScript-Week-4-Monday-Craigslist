// import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  currentTime: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
