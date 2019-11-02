# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Bench.delete_all

julia = User.create(username: 'hello123', password: 'hello123')
chris = User.create(username: 'chris123', password: 'hello123')
joanna = User.create(username: 'joanna123', password: 'hello123')
braeden = User.create(username: 'braeden123', password: 'hello123')

stephen_bench = Bench.create(description: 'stephens bench!', lat: 37.787971, lng: -122.407140)
max_bench = Bench.create(description: 'maxs bench!', lat: 37.789381, lng: -122.408302)
will_bench = Bench.create(description: 'wills bench!', lat: 37.788329, lng: -122.407267)
kevin_bench = Bench.create(description: 'kevins bench!', lat: 37.789300, lng: -122.404982)
lisa_bench = Bench.create(description: 'lisas bench!', lat: 37.789169, lng: -122.401688)
fion_bench = Bench.create(description: 'fions bench!', lat: 37.790153, lng: -122.402471)
julia_bench = Bench.create(description: 'jumpingjackjulias bench!', lat: 37.790145, lng: -122.404515)
danna_bench = Bench.create(description: 'dannas bench!', lat: 37.790611, lng: -122.406205)



