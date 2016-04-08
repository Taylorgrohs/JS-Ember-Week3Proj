import Ember from 'ember';

export default Ember.Component.extend({
  // nameList: Ember.computed('question.answers.length', function(){
  //   var list = "";
  //   var answerList = this.get('question');
  //   console.log(answerList);
  //   answerList.forEach(function(answer){
  //     if(list === "") {
  //       list += "";
  //     } else {
  //       list += ", ";
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
