Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resource :session, only: [:new, :create, :destroy]
  resources :subs do
    resources :posts, only: [:create]
  end
  resources :posts, except: [:index, :create] do
    resources :comments, only: [:create, :show]
  end
 
  resources :comments, only: [:new, :show] do
    resources :comments, only: [:create]
  end



end
