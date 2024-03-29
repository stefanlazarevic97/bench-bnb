Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
        resources :users, only: :create
        resource :session, only: [:show, :create, :destroy]
        resources :benches, only: [:index, :show, :create]
    end

    get '*path', to: "static_pages#frontend_index"
end
