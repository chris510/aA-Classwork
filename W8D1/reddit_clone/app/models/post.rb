class Post < ApplicationRecord
  validates :title, presence: true

  has_many :post_subs
  belongs_to :sub
  has_many :comments
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
