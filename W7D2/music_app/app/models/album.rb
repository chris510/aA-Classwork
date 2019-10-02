class Album < ApplicationRecord
  
  TYPE = {true=> "live", false=> "studio"}

  belongs_to :band,
  foreign_key: :band_id,
  class_name: :Band

  belongs_to :record,
  foreign_key: :record_id,
  class_name: :Album

  has_many :albums,
  foreign_key: :record_id,
  class_name: :Album
end
