Rails.application.routes.draw do
  devise_for :users
  root 'application#app'

  resources :questions, only: [:create, :index, :show] do
    resources :answers, only: [:create, :show] do
      member do
        put '/upvote' => 'answers#upvote'
      end
    end

    member do
      put '/upvote' => 'questions#upvote'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
