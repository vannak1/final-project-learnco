class QuestionsController < ApplicationController
  def index
    respond_with Question.all
  end

  def show
    respond_with Question.find(params[:id])
  end

  def create
    respond_with Question.create(question_params)
  end

  def upvote
    @question = Question.find(params[:id])
    @question.increment!(:votes)
    respond_with @question
  end

  private

  def question_params
    params.require(:question).permit(:body, :lessonLink, :githubLink)
  end
end
