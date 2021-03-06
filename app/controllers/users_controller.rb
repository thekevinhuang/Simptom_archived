require 'httparty'


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

    def login
        @user = User.find_by(email: params[:user][:email])
        
        if @user
            if @user.authenticate(params[:user][:password])
                render json: @user
            else
                render :json => {:errors => @user.errors.fullMessages}, :status => 422
            end
        else
            render :json => {:errors => "There was an issue with your login"}, :status => 422
        end
        
    end

    def show
        @user = User.find_by(id: params[:id])
        
        render json:@user
    end

    def index
        @users = User.all
        render json:@users
    end

    def google_authorization
        url= "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{params["code"]}"
        response = HTTParty.get(url)
        data = response.parsed_response
        @user = User.find_or_initialize_by(email: data["email"])

        if @user.email
            @user.email = data["email"]
            @user.username = data["name"]
            @user.password = SecureRandom.hex(8)
        end

        if @user.save
            render json: @user
        else
            render :json => {:errors => @user.errors.full_messages}, :status => 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end


end