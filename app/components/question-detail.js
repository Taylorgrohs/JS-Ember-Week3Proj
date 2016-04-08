import Ember from 'ember';

export default Ember.Component.extend({
  upvoteCount: Ember.inject.service(),
  singleLikes: Ember.computed('upvoteCount.answers.length', function(){
    var list = [];
    var upvoteCount = this.get('upvoteCount');
    var test1 = answer.get('author');
    console.log(test1);
    upvoteCount.answers.forEach(function(answer) {
      if(this.get('answer.author') === answer.get('author')){
        list.pushObject(answer);
      }
    });
    return list;
  }),

  actions: {
    upvote(answer) {
      this.get('upvoteCount').add(answer);
    },
  }
});
