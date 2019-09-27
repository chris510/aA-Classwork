# == Schema Information
#
# Table name: artworkshares
#
#  id         :bigint           not null, primary key
#  artwork_id :integer          not null
#  viewer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ArtworkshareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
