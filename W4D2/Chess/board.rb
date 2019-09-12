require_relative "piece.rb"

class Board

  attr_reader :grid

  def initialize
    @grid = Array.new(8) { Array.new(8) }
    self.set_grid
  end

  def set_grid
    @grid.each_with_index do |row, ri|
      row.each_with_index do |column, ci|
        if ri == 1
          @grid[ri][ci] = Pawn.new(:black)
        elsif ri > 1 && ri < 6
          @grid[ri][ci] = NullPiece.instance
        elsif ri == 0 && (ci == 0 || ci == 7)
          @grid[ri][ci] = Rook.new(:black)
        elsif ri == 0 && (ci == 1 || ci == 6)
          @grid[ri][ci] = Knight.new(:black)
        elsif ri == 0 && (ci == 2 || ci == 5)
          @grid[ri][ci] = Bishop.new(:black)
        elsif ri == 0  && ci == 3
          @grid[ri][ci] = Queen.new(:black)
        elsif ri == 0 && ci == 4
          @grid[ri][ci] = King.new(:black)
        elsif ri == 6
          @grid[ri][ci] = Pawn.new(:white)
        elsif ri == 7 &&  (ci == 0 || ci == 7)
          @grid[ri][ci] = Rook.new(:white)
        elsif ri == 7 && (ci == 1 || ci == 6)
          @grid[ri][ci] = Knight.new(:white)
        elsif ri == 7 &&  (ci == 2 || ci == 5)
          @grid[ri][ci] = Bishop.new(:white)
        elsif ri == 7 && ci == 4
          @grid[ri][ci] = Queen.new(:white)
        elsif ri == 7 && ci == 3
          @grid[ri][ci] = King.new(:white)
        end
      end
    end
    @grid
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end

  def valid_pos(pos)
    row, col = pos
    if (row >= 0  && row <= 7) && (col >= 0  && col <= 7)
      return true
    end
    false
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece there!" if start_pos.nil?
    raise "Piece cannot move there!" unless valid_pos(end_pos) 
  
    piece = self[start_pos]
    self[end_pos] = piece 
    self[start_pos] = Nullpiece.instance
  end
end

