# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  puts "Starting..."

  # Artwork.destroy
  # Artworkshare.destroy
  # User.destory
  #-----------
  user1 = User.create!(username: 'chris5', email: 'chris5@gmail.com')
  user2 = User.create!(username: 'curry30', email: 'curry30@gmail.com')
  user3 = User.create!(username: 'rails21', email: 'rails21@gmail.com')
  #-----------
  artwork1 = Artwork.create!(title: 'IliketoPoop', image_url: 'www.poop/Pooping.png', artist_id: user1.id )
  artwork2 = Artwork.create!(title: 'IliketoSleep', image_url: 'www.sleep/sleeping.png', artist_id: user2.id )
  artwork3 = Artwork.create!(title: 'IliketoEat', image_url: 'www.eat/eating.png', artist_id: user3.id )
  # artwork4 = Artwork.create!(title: IliketoPlay, image_url: 'www.play/playing.png', artist_id: user1 )
  # artwork5 = Artwork.create!(title: IliketoJump, image_url: 'www.jump/jumping.png', artist_id: user2 )
  #-----------
  artworkshares1 = Artworkshare.create!(artwork_id: artwork1.id, viewer_id: user3.id)
  artworkshares2 = Artworkshare.create!(artwork_id: artwork2.id, viewer_id: user2.id)
  artworkshares3 = Artworkshare.create!(artwork_id: artwork3.id, viewer_id: user1.id)
  # artworkshares4 = Artworkshare.create!(artwork_id: artwork1.id, viewer_id: user2.id)
  # artworkshares5 = Artworkshare.create!(artwork_id: artwork2.id, viewer_id: user3.id)
  # artworkshares6 = Artworkshare.create!(artwork_id: artwork3.id, viewer_id: user1.id)
  #-----------=

  puts 'Finished!!!'

end

