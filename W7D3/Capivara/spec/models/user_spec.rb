# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }

    subject(:user) { User.new(username: "Wolfy", password: "wolfy1") }

    describe "Password BCrypt matches passed in Password" do      
      it 'Password generates a BCrypt string' do 
        expect(BCrypt::Password.new(subject.password_digest)).to be_kind_of(BCrypt::Password)
      end

      it 'Password is true' do
        expect(subject.is_password?(subject.password)).to be(true)
      end
    end

    describe '#ensure_session_token' do 
      it 'Creates a session token if it does not exist' do
        expect(subject.session_token).to_not be(nil)
      end
    end

    describe "#find_by_credentials" do
      it "Check if the user is available" do
        chris = User.new(username: "Chris", password: "chris1")
        chris.save!
        expect(User.find_by_credentials("Chris", "chris1")).to_not be(nil)
        expect(User.find_by_credentials("Chris33", "chris132")).to be(nil)
      end
    end

    describe "#reset_session_token!" do
      it "Change session token" do
        expect(subject.session_token).to_not eq(subject.reset_session_token!)
      end
    end 
end
