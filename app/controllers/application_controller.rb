class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :lang?
  helper_method :ie?

  def lang?(lang)
    params[:lang]&.to_sym == lang&.to_sym
  end

  def ie?
    ua&.family == 'IE'
  end

  private

  def ua
    UserAgentParser.parse(request.env["HTTP_USER_AGENT"])
  end
end
