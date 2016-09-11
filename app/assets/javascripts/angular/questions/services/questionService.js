angular.module('learnExchange')

.factory('QuestionService', ['$http', function($http){
  var service = {
    questions: [],
    question: [],
    userQuestions: []
  }

  service.getQuestions = function(){
    return $http.get('/questions.json').success(function(data){
      angular.copy(data, service.questions);
    });
  };

  service.getShow = function(id){
    return $http.get('/questions/' + id + '.json').success(function(data){
      angular.copy(data, service.question);
    })
  };

  service.getUsersQuestions = function(id){
    return $http.get('/users/' + id + '.json').success(function(data){
      angular.copy(data, service.userQuestions);
    })
  };

  service.create = function(question){
    return $http.post('/questions.json', question).success(function(data){
      service.questions.push(data);
    });
  };

  service.addAnswer = function(id, answer){
    return $http.post('/questions/' + id + '/answers.json', answer);
  };

  service.upvote = function(question){
    return $http.put('/questions/' + question.id + '/upvote.json')
      .success(function(data){
        question.votes += 1;
      });
  };

  service.upvoteAnswer = function(id, answer){
    return $http.put('/questions/' + id + '/answers/' + answer.id + '/upvote.json')
      .success(function(data){
        answer.votes += 1;
      });
  };

  return service;

}]);
