class Patient < ActiveRecord::Base
    belongs_to :user 
    has_many :symptoms, :calendars
end