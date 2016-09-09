class AnswersController < ApplicationController
  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.create(answer_params)

    respond_with @question, @answer
  end

  def upvote
    @question = Question.find(params[:question_id])
    @answer = @question.answers.find(params[:id])

    @answer.increment!(:votes)
    respond_with @question, @answer
  end

  private
  def question_params
    params.require(:answer).permit(:body, :resource)
  end
end
