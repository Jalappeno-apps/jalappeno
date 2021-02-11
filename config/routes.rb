Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "under_construction#index"
  get "home", to: "homepage#index"

  get "/hempchamp", to: "hempchamp#index", as: :hempchamp

  scope '(:locale)', locale: /en|pl/ do
    root "homepage#index"
  end
end
