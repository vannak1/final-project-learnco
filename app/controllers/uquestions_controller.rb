class UquestionsController < ApplicationController
  def index
    user = User.find(params[:id])
    questions = user.questions
    respond_with questions
  end
end
