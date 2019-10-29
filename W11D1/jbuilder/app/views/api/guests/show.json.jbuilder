# json.extract! @guest, :name, :age, :favorite_color

json.partial! 'guest', guest: @guest

json.gifts @guest.gifts do |gift|
  json.extract! gift, :title, :description
  # json.title gift.title
  # json.description gift.description
end