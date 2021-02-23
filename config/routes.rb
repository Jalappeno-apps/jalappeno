Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "under_construction#index"
  get "landing", to: "landing#index"
  get "home", to: "homepage#index"

  get "/projects/:project" => "projects#show"

  get 'terms-of-service', to: 'static_pages#terms_of_service'
  get 'privacy-policy', to: 'static_pages#privacy_policy'

  scope '(:locale)', locale: /en|pl/ do
    root "homepage#index"
  end
end
