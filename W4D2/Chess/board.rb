require_relative "piece.rb"

class Board

  attr_reader:grid

  def initialize
    @grid = Array.new(8) { Array.new(8) }
    self.set_grid
  end

  def set_grid
    @grid.each_with_index do |row, ri|
      row.each_with_index do |column, ci|
        if ri <= 1 || ri >= 6
          @grid[ri][ci] = "X"
        else
          @grid[ri][ci] = "O"
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
    if row == (0..7) && col == (0..7)
      return true
    end
    false
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece there!" if start_pos.nil?
    raise "Piece cannot move there!" if !valid_pos(end_pos) 
  
    something = @grid[start_pos]
    @grid[end_pos] = something
    @grid[start_pos] = "O"
  end
end

