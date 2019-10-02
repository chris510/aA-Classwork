class User < ApplicationRecord
  validates :email, presence: true
  validates :password, allow_nil: true, length: { minimum: 6 }

  before_validation :ensure_session_token

  attr_reader :password

  def self.generate_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.update!(session_token:SecureRandom.urlsafe_base64)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
