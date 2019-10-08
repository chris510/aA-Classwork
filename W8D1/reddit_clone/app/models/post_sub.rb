class PostSub < ApplicationRecord
  validates :post_id, :sub_id, presence: true
  validates :sub_id, uniqueness: { scope: :post_id } 

  belongs_to :post
  belongs_to :sub
end
