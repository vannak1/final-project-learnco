angular.module('learnExchange')
  .directive('answer', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '_answer.html',
    controller: 'QuestionsController',
  }
  });
