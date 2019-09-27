Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :create, :destroy, :update, :show ] do 
    resources :artworks
    resources :comments, only: [:index]
  end

  resources :artworks do
    resources :comments, only: [:index]
    resources :likes
  end

  resources :comments, only: [:create, :destroy] do  
    resources :likes
  end

   resources :artworkshares, only: [:create, :destroy]

  # get '/users', to: 'users#index'
  # post '/users', to: 'users#create'
  # get '/users.new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  # get '/users/:id', to: 'users#show', as: 'user'
  # patch '/users/:id', to: 'users#update'
  # put '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destry'
end
