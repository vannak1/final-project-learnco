angular.module('learnExchange')

.factory('questions', ['$http', function($http){
  var service = {
    questions: []
  }

  service.getQuestions = function(){
    return $http.get('/questions.json').success(function(data){
      angular.copy(data, service.questions);
    });
  };

  service.create = function(question){
    return $http.post('/questions.json', question).sucess(function(data){
      service.questions.push(data);
    });
  };

  service.upvote = function(question){
    return $http.put('/questions/' + question.id + '/upvote.json')
      .success(function(data){
        question.votes += 1;
      });
  };

  return service;

}]);
