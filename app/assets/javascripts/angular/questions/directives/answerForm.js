angular.module('learnExchange')
  .directive('answerForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'angular/questions/templates/_answerForm.html',
    controller: 'QuestionsController',
  }
  });
