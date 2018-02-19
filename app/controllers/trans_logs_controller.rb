class TransLogsController < ApplicationController
  before_action :set_trans_log, only: [:show, :edit, :update, :destroy]

  # GET /trans_logs
  # GET /trans_logs.json
  def index
    @trans_logs = TransLog.all
  end

  # GET /trans_logs/1
  # GET /trans_logs/1.json
  def show
  end

  # GET /trans_logs/new
  def new
    @user = User.find_by_id(params[:user_id])
    @trans_log = @user.trans_logs.new
  end

  # GET /trans_logs/1/edit
  def edit
  end

  # POST /trans_logs
  # POST /trans_logs.json
  def create
    @user = User.find_by_id(params[:trans_log][:user_id])
    @trans_log = TransLog.new(trans_log_params)
    update_user_account
    respond_to do |format|
      if @trans_log.save
        format.html { redirect_to adjustment_transactions_path, notice: 'Adjustment was successfully created.' }
        format.json { render :show, status: :created, location: @trans_log }
      else
        format.html { render :new }
        format.json { render json: @trans_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trans_logs/1
  # PATCH/PUT /trans_logs/1.json
  def update
    respond_to do |format|
      if @trans_log.update(trans_log_params)
        format.html { redirect_to @trans_log, notice: 'Trans log was successfully updated.' }
        format.json { render :show, status: :ok, location: @trans_log }
      else
        format.html { render :edit }
        format.json { render json: @trans_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trans_logs/1
  # DELETE /trans_logs/1.json
  def destroy
    @trans_log.destroy
    respond_to do |format|
      format.html { redirect_to trans_logs_url, notice: 'Trans log was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trans_log
      @trans_log = TransLog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trans_log_params
      params.require(:trans_log).permit(:amount, :pre_balance, :new_balance, :transaction_id, :user_id, :trans_type, :comment)
    end

    def update_user_account
      amount = 0
      amount = @trans_log.trans_type == 0 ? @user.amount+@trans_log.amount : @user.amount-@trans_log.amount
      @trans_log.pre_balance =  @user.amount
      @trans_log.new_balance = amount
      @user.update_attributes(amount: amount)
    end
end
