require_relative 'card'

class Deck

  SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]
  VALUES = (2..10).to_a + ["Jack", "Queen", "King", "Ace"]

  attr_reader :set
  
  def initialize
    @set = []
    SUITS.each do |suit|
      VALUES.each do |value|
        @set << [suit, value]
      end
    end
  end

end