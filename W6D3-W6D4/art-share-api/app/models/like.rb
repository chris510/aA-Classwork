# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  liked_user_id :integer          not null
#

class Like < ApplicationRecord
  validates :liked_user_id, presence: true
  
  belongs_to :likeable, polymorphic: true

  belongs_to :liked_user,
    foreign_key: :liked_user_id,
    class_name: :User,
end
