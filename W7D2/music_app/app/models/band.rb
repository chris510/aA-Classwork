class Band < ApplicationRecord
  
  has_many :albums,
  foreign_key: :band_id,
  class_name: :Album
end
