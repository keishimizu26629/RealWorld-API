class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def get_user
    auth_header = request.headers['Authorization']
    if auth_header.nil?
      render json: { error: 'Authorization header not found' }, status: :unauthorized and return
    end

    token = auth_header.split(' ').last
    begin
      payload = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      user_id = payload.first['user_id']
      user = User.find(user_id)
      render json: { user: { id: user.id, username: user.username, email: user.email } }, status: :ok
    rescue JWT::DecodeError => e
      Rails.logger.error "JWT Decode Error: #{e.message}"
      render json: { error: 'Invalid token' }, status: :unauthorized
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
