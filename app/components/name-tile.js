import Ember from 'ember';

export default Ember.Component.extend({
  nameList: Ember.computed('question.length', function(){
    var list = "";
    var question = this.get('questions');

    question.forEach(function(question){
      if(list === ""){
        list += "Questions by: " + question.get('author');
      } else {
        list += ", " + question.get('author');
      }
    });
    return list;
    console.log(list);
  }),
});
