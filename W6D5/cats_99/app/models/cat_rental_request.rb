# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
  STATUS = ['PENDING', 'APPROVED', 'DENIED']

  validates :start_date, :end_date, presence: true 
  validates :status, inclusion: :in {STATUS}

  belongs_to :cat, 
  primary_key: :id, 
  foreign_key: :cat_id,
  class_name: :Cat 

  def overlapping_requests
    #query
    #use .where to return activerecord relations 
    #Between method to check dates 
    
  end

end
