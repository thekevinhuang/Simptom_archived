Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :users 

    post 'auth/request' => 'users#google_authorization'
    post '/login' => 'users#login'
  end

  
end
