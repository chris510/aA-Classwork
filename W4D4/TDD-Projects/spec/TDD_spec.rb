require "TDD"

RSpec.describe "TDD" do  

  describe "#my_uniq" do
    array = [1, 2, 3, 4, 3]

    it "returns elements without duplicates in their original order" do
      expect(my_uniq(array)).to eq([1, 2, 3, 4])
    end
    it "takes an array as an argument" do
      expect{ my_uniq("hello") }.to raise_error(NoMethodError)
    end
    it "should not return the original array" do
      expect(my_uniq(array)).to_not be(array)
      expect(my_uniq(array)).to be_a(Array)
    end
  end

  describe "#two_sum" do
    array = [-1, 0, 2, -2, 1]
    
    it "returns pairs of positions equal to zero" do 
      expect(two_sum(array)).to eq([[0, 4], [2, 3]])
    end
    it "return pairs in order" do
      expect(two_sum(array)).to_not eq([[2, 3], [0, 4]])
    end
    it "does not return duplicate indices" do
      expect(two_sum(array)).to_not eq([[0, 4], [1, 1], [2, 3], [3, 2], [4, 0]])
    end
  end

  describe "#my_transpose" do
    rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
    cols = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    # possible errors: not return 2d array, 
    #   not accept 2d array
    #   equal transposed version of itself

    it "returns a new array with it's rows and columns transposed" do
      expect((my_transpose(rows))[0][1]).to eq(cols[1][0])
    end
    it "accepts a two-dimensional array as an argument" do
      expect{my_transpose([1, 2, 3])}.to raise_error(NoMethodError)
    end
  end

  describe "#stock_picker" do
    days = [24, 42, 56, 29, 12, 100, 13]

    it "picks the pair of days that gives the most profit " do

    end
  end

end