angular.module('learnExchange')
  .directive('searchForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '_searchForm.html',
    controller: 'MainController',
  }
  });
