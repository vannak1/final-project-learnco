class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  after_filter :set_csrf_cookie_for_ng
  respond_to :json

  def app
    render 'layouts/application'
  end

  def verified_request?
   super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
 end

 private

 def set_csrf_cookie_for_ng
   cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
 end
end
