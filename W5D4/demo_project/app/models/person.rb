# == Schema Information
#
# Table name: people
#
#  id       :bigint           not null, primary key
#  name     :string           not null
#  house_id :integer
#

class Person < ApplicationRecord
  validates :name, presence: true
 
  def check_name_length
    unless self.name.length >= 4
      errors[:name] << 'is too short and must be longer than 4 characters!'
  end
 
  belongs_to(:house, {
    primary_key: :id, #house id
    foreign_key: :person_id,
    class_name: :Person
  })
 
  # def house USE associations
  #   House.where( {house_id: self_id})
  # end
end
