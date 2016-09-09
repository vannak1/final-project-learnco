angular.module('learnExchange')
  .directive('questionForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'main/_questionForm.html',
    controller: 'MainController',
  }
  });
