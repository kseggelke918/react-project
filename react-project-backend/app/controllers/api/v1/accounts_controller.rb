class Api::V1::AccountsController < ApplicationController
    before_action :set_user

    def index 
        account = @user.accounts 
        render json: account
    end 

    def create 
        account = @user.accounts.build(account_params)
        if account.save 
            render json: account
        else 
            ender json: {error: "Account not created"}
        end 
    end 

    def show 
        account = @user.accounts.find_by(id: params[:id])
        render json: account 
    end 

    def destroy 
        account = @user.accounts.find_by(id: params[:id])
        account.destroy 
    end

    private 

    def set_user
        @useer = User.find(params[:user_id])
    end 

    def account_params 
        params.require(:account).permit(:acct_number, :acct_type, :balance, :user_id)
    end 

end
