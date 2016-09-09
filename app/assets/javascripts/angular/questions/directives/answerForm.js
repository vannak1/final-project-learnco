angular.module('learnExchange')
  .directive('answerForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '_answerForm.html',
    controller: 'QuestionsController',
  }
  });
