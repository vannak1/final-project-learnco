angular.module('learnExchange')
  .directive('searchForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'angular/main/templates/_searchForm.html',
    controller: 'MainController',
  }
});
