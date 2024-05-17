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
    token = requests.headers['Authorization'].split(' ').last
    begin
      payload = JWT.decode(token, Rails.application.secets.secret_key_base, true, algorithm: 'HS256')
      user_id = payload.first['user_id']
      user = User.find(user_id)

      render json: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      }, status: :ok
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound => e
      render json: {
        error: 'Invalid token or user not found'
      }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
