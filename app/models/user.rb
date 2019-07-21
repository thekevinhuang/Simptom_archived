class User < ActiveRecord::Base
    has_secure_password
    has_one :patient
    has_one :provider
    validates :email, presence: true, uniqueness: true
end