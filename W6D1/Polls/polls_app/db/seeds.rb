# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  puts 'Beginning to seed'

  AnswerChoice.destroy_all
  Poll.destroy_all
  Question.destroy_all
  Response.destroy_all
  User.destroy_all

  user1 = User.create!(username: 'Chris')
  user2 = User.create!(username: 'Lance')
  poll = Poll.create!(title: 'Favorite Color', user_id: user1.id)
  question = Question.create!(poll_id: poll.id, text: 'Whats your favorite color?')
  answer_choice1 = AnswerChoice.create!(question_id: question.id, text: 'blue')
  answer_choice2 = AnswerChoice.create!(question_id: question.id, text: 'red')
  answer_choice3 = AnswerChoice.create!(question_id: question.id, text: 'green')
  answer_choice4 = AnswerChoice.create!(question_id: question.id, text: 'orange')
  response1 = Response.create!(answer_choice_id: answer_choice1.id, user_id: user1.id)
  response2 = Response.create!(answer_choice_id: answer_choice2.id, user_id: user1.id)
  response3 = Response.create!(answer_choice_id: answer_choice3.id, user_id: user1.id)
  response4 = Response.create!(answer_choice_id: answer_choice4.id, user_id: user1.id)

  puts 'Finished seeding'
end