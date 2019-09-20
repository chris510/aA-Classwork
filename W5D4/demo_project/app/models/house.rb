# == Schema Information
#
# Table name: houses
#
#  id      :bigint           not null, primary key
#  address :string           not null
#

class House < ApplicationRecord
  validates :address, presence: true
 
  has_many(:residents, {
    primary_key: :id, #person's id
    foreign_key: :house_id,
    class_name: :House
  })

  # def person USE ASSOCIATIONS
  #   Person.find(person_id)
  # end
 
end
