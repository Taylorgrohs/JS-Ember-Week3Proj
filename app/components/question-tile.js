import Ember from 'ember';

export default Ember.Component.extend({
  // answerName: Ember.computed('question.answers.length', function(){
  //   var list = "";
  //   var question = this.get('question.answers');
  //   console.log(this.get('question.answers'))
  //
  //   question.forEach(function(answer){
  //     if(list === ""){
  //       list += "By: " + answer.get('author');
  //       console.log(answer.get('content'));
  //     } else {
  //       list += ", " + answer.get('author');
  //     }
  //   });
  //   return list;
  // }),
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
  }
});
