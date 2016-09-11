angular.module('learnExchange')
  .directive('questionForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'angular/main/templates/_questionForm.html',
    controller: 'MainController',
  }
  });
