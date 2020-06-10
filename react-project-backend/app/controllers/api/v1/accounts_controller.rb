class Api::V1::AccountsController < ApplicationController
    before_action :set_user

    def index 
        account = Account.all 
        render json: account
    end 

    def create
        account = Account.new(account_params)
        if accout.save 
            render json: account
        else 
            render json: {error: "Account not created"}
        end 
    end 

    def show 
        account = Account.find(params[id])
        render json: account 
    end 

    def destroy 
        account = Account.find(params[id])
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
