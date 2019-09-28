# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'date'

class Cat < ApplicationRecord
  COLORS = ['blue', 'orange', "green", "red"]
  SEX = ['M', 'F']

  validates :birth_date, :name, :description, presence: true
  validates :color, inclusion: { in: COLORS }, presence: true
  validates :sex, inclusion: { in: SEX }, presence: true

  def age
    age = Date.today.year - self.birth_date.year
    age -= 1 if Date.today.month < self.birth_date.month
    age
  end

  has_many :rental_requests, dependent: :destroy,
  primary_key: :id, 
  foreign_key: :cat_id,
  class_name: :CatRentalRequest 
end
