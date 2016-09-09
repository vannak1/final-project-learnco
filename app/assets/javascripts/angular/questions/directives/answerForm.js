angular.module('learnExchange')
  .directive('answerForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'questions/_answerForm.html',
    controller: 'QuestionsController',
  }
  });
