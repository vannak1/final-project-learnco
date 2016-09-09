angular.module('learnExchange')
  .directive('searchForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'main/_searchForm.html',
    controller: 'MainController',
  }
});
