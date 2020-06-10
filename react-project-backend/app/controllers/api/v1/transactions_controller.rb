class Api::V1::TransactionsController < ApplicationController
    before_action :set_account

    def index 
        transactions = @account.transactions 
        render json: transaction
    end 

    def create 
        transaction = @account.transactions.build(transaction_params)
        if @account.adjust_balance(transaction) 
            transaction.save
            render json: transaction
        else 
            render json: {error: 'Error creating transaction'}
        end 
    end 

    def show 
        transaction = @account.transactions.find_by(id: params[:id])
        render json: transaction
    end 

    def destroy 
        transaction = @account.transactions.find_by(id: params[:id])
        transaction.destroy 
    end 

    private 

    def set_account 
        @account = Account.find(params[:account_id]) 
    end 

    def transaction_params 
        params.require(:transaction).permit(:amount, :debit_credit, :merchant, :date, :account_id)
    end 
end
