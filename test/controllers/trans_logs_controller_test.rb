require 'test_helper'

class TransLogsControllerTest < ActionController::TestCase
  setup do
    @trans_log = trans_logs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:trans_logs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trans_log" do
    assert_difference('TransLog.count') do
      post :create, trans_log: { amount: @trans_log.amount, comment: @trans_log.comment, new_balance: @trans_log.new_balance, pre_balance: @trans_log.pre_balance, trans_type: @trans_log.trans_type, transaction_id: @trans_log.transaction_id, user_id: @trans_log.user_id }
    end

    assert_redirected_to trans_log_path(assigns(:trans_log))
  end

  test "should show trans_log" do
    get :show, id: @trans_log
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trans_log
    assert_response :success
  end

  test "should update trans_log" do
    patch :update, id: @trans_log, trans_log: { amount: @trans_log.amount, comment: @trans_log.comment, new_balance: @trans_log.new_balance, pre_balance: @trans_log.pre_balance, trans_type: @trans_log.trans_type, transaction_id: @trans_log.transaction_id, user_id: @trans_log.user_id }
    assert_redirected_to trans_log_path(assigns(:trans_log))
  end

  test "should destroy trans_log" do
    assert_difference('TransLog.count', -1) do
      delete :destroy, id: @trans_log
    end

    assert_redirected_to trans_logs_path
  end
end
