require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      email: "christrinh5@aa.io",
      password: "chris123password")
  end

  context 'validations' do
    should validate_presence_of(:email)
    should validate_presence_of(:password_digest)
    should validate_length_of(:password).is_at_least(6)
  end
  
  describe 'is_password?' do
    it 'verifies a correct password' do
      expect(user.is_password?(chris123password)).to be(true)
    end

    it 'does not verify an incorrect password' do
      expect(user.is_password?(wrongpassword)).to be(false)
    end
  end

  describe 'reset_session_token!' do
    user.valid?
    old_session_token = user.session_token
    user.reset_session_token!
    it 'sets a new session_token on the current user' do
      expect(user.r)
    end

    it 'returns the session token' do

    end
  end
end
