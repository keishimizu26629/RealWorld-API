require 'jwt'

class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end
end
