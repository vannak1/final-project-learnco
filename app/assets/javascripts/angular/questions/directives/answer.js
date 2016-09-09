angular.module('learnExchange')
  .directive('answer', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'questions/_answer.html',
    controller: 'QuestionsController',
  }
  });
