angular.module('learnExchange')
  .controller('QuestionsController', ['$scope', '$stateParams', 'questions',
                              function($scope, $stateParams, questions){
  $scope.question = questions.questions[$stateParams.id];

  $scope.addAnswer = function(){
    if($scope.body === '') { return; }
    $scope.question.answers.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

}]);
