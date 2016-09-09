class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  after_filter :set_csrf_cookie_for_ng
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?

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

 def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
 end
end
