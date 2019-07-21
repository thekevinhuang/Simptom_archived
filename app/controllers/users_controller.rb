class UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user
        else
            render json: {
                errors: @user.errors.fullMessages
            }, status: 500
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        
        render json:@user
    end


    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end