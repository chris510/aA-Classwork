class User < ApplicationRecord
  validates :username, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: 'Password can\t be blank' }
  validates :password, length: { minimum: 6, allow_nil : true }
  before_validation :ensure_session_token
  
  #check if given password is the same regarding checksum and salt
  def self.find_by_crendentials(username, password) 
    user = User.find_by(username: username)
    return user if user == true && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token

  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  #sees if a token is always set
  def ensure_session_token 
    self.session_token ||= User.generate_session_token
  end

  def
end
