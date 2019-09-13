# you get 5 cards
# you make a bet
# you can see the bet
# exhange up to 3 cards
# fold
# bet again

class Card 

  SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]
  VALUES = (1..10).to_a + ["Jack", "Queen", "King", "Ace"]

  attr_reader :suit, :value
  def initialize
    @value = VALUES.sample
    @suit = SUITS.sample
  end
end