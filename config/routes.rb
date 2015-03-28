Dozens::Application.routes.draw do
  resources :ingredients

  resources :companies

  resources :recipes

  get "main/index"
  root "main#index"

end
