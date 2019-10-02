require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    should validate_presence_of(:email)
    should validate_presence_of(:password_digest)
    should validate_length_of(:password).is_at_least(6)
  end
end
