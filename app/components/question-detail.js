import Ember from 'ember';

export default Ember.Component.extend({
  upvoteCount: Ember.inject.service(),

  actions: {
    upvote(answer) {
      this.get('upvoteCount').add(answer);
    },
  }
});
