class UquestionsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  def index
    user = User.find(params[:id])
    questions = user.questions
    respond_with questions
  end
end
