class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def show
    render json: UserSerializer.new(@user)
  end

  def create
    @user = User.new(user_params)
  
    if @user.save
      session[:user_id] = @user.id 
      render json: UserSerializer.new(@user)
    else
      render json: {error: @user.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: UserSerializer.new(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
   
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :username, :password, :password_confirmation)
    end
end
