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

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
