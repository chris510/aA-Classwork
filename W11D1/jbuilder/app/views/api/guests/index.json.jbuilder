json.array! @guests do |guest|
  json.partial! 'guest', guest: guest
end
