import Ember from 'ember';

export function answerCount(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 0){
    return Ember.String.htmlSafe('<span class="">' + question.get('answers').get('length') + '</span>');
  }
}

export default Ember.Helper.helper(answerCount);
