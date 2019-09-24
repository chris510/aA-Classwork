# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string
#  true       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  has_many :responses,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Response'
  
  has_many :authored_polls,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Poll'


  
end
