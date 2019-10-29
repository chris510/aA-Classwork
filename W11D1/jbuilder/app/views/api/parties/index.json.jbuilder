json.array! @parties.each do |party|
  json.extract! party, :name, :location
  json.guests party.guests.each do |guest|
    json.extract! guest, :name, :age, :favorite_color
  end
end