require 'card'

RSpec.describe Card do

  SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]
  VALUES = (1..10).to_a + ["Jack", "Queen", "King", "Ace"]

  subject(:card) {Card.new}

  describe "#initialize" do
    it "returns a random card which pulls from the suits and values class constants" do
      expect(VALUES).to include(card.value)
      expect(SUITS).to include(card.suit)
    end

  end

end