Rails.application.routes.draw do

    # :favorite_exhibits, :favorite_museums
    resources :museums, :exhibits
    # resources :items, :only => [:index, :show]
    resources :users, :only => [:show, :create, :edit, :update]

    get "/profile", to: "users#show"
    post "/login", to: "auth#create"
    get "/loggedin", to: "application#logged_in?"
    
    #custon for room because rooms need their exhibit id
    post "/exhibits/:id/addroom", to: "exhibits#add_room"
    delete "/exhibits/:id/deleteroom/:room", to: "exhibits#delete_room"
    put "/exhibits/:id/editroom/:room", to: "exhibits#update_room"
    
    #custom for items becuase items need room id, and -by connection- exhibit id
    get "/exhibits/:exhibit_id/rooms/:room_id/items/:item_id", to: "items#show"
    delete "/exhibits/:exhibit_id/rooms/:room_id/items/:item_id", to: "items#destroy"
    put "/exhibits/:exhibit_id/rooms/:room_id/items/:item_id", to: "items#update_image"
    patch "/exhibits/:exhibit_id/rooms/:room_id/items/:item_id", to: "items#update"
    post "/exhibits/:exhibit_id/rooms/:room_id/items", to: "items#create"
    get "/exhibits/:exhibit_id/rooms/:room_id/items", to: "items#index"

end
