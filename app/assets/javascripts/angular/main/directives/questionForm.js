angular.module('learnExchange')
  .directive('questionForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '_questionForm.html',
    controller: 'MainController',
  }
  });
