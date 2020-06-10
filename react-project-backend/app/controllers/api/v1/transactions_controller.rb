class Api::V1::TransactionsController < ApplicationController
    before_action :set_account




    def index 
        transaction = Transaction.all 
        render json: transaction
    end 

    def create 
        transaction = Transaction.new(transaction_params)
        if transaction.save 
            render json: transaction
        else 
            render json: transaction
        end 
    end 

    def show 

    end 

    def destroy 

    end 

    private 

    def set_account 
        @account = Account.find(params[:account_id]) 
    end 

    def transaction_params 
        params.require(:transaction).permit(:amount, :debit_credit, :merchant, :date, :account_id)
    end 
end
