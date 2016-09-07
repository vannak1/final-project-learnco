angular.module('learnExchange', [])

  .controller('MainController', ['$scope', function($scope){
    $scope.questions = [
      {body: 'post1', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 1},
      {body: 'post2', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 2},
      {body: 'post3', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 3},
      {body: 'post4', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 4},
      {body: 'post5', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 5}
    ];
  }]);
