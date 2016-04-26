require 'bcrypt'

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  # validates :password, length: { minimum: 6, allow_nil: true }

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    digest = BCrypt::Password.new(self.password_digest)
    digest.is_password?(password)
  end

  def self.find_user_by_credentials(options)
    user = User.find_by(username: options[:username])
    return user unless user
    return nil unless user.is_password?(options[:password])
    user
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
  end

end
