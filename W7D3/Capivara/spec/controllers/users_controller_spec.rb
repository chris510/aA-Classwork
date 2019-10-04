require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  subject { User.create(username: 'santa', password: 'santaiscool')}

  describe "GET #index" do
    it "Render user index page" do 
      get :index
      expect(response).to render_template(:index)
    end
  end

  describe "GET #show" do
    it "If user in database shows the user's show page" do
      get :show, params: { id: subject.id }
      expect(response).to render_template(:show)
    end

    it "If user is not in the database, redirect to the index page" do
      get :show, params: { id: 5 }
      expect(flash[:errors]).to be_present
      expect(response).to redirect_to(users_url)
    end
  end

  
end
