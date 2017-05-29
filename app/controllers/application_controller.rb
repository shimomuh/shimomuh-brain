class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :lang?

  def lang?(lang)
    params[:lang]&.to_sym == lang&.to_sym
  end
end
