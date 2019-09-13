require 'deck'

RSpec.describe Deck do
  subject(:deck) { Deck.new }
  describe "#initialize" do
    it "creates an array of unique cards" do
      expect(deck.set).to eq(deck.set.uniq)
    end
    it "creates an array of 52 sub-arrays" do
      expect(deck.set.length).to eq(52)
      expect(deck.set[0]).to be_a(Array)
    end
  end

end