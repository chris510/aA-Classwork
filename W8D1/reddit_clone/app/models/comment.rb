class Comment < ApplicationRecord

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post

  belongs_to :child_comments, optional: true, 
    foreign_key: :parent_comment_id,
    class_name: :Comment

  has_one :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment

  validates :content, presence: true
end
