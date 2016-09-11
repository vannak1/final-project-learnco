angular.module('learnExchange')
  .directive('answer', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'angular/questions/templates/_answer.html',
    controller: 'QuestionsController',
  }
  });
