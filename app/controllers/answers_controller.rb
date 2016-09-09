class AnswersController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.create(answer_params.merge(user_id: current_user.id))

    respond_with @question, @answer
  end

  def upvote
    @question = Question.find(params[:question_id])
    @answer = @question.answers.find(params[:id])

    @answer.increment!(:votes)
    respond_with @question, @answer
  end

  private
  def answer_params
    params.require(:answer).permit(:body, :votes)
  end
end
