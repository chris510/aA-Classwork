require_relative "board.rb"
require 'singleton'


module Slideable
 
  def horizontal_movement
    horizontals = []
    (-7..7).each do |x|
      horizontals << [x, 0] 
    end
    horizontals 
  end

  def vertical_movement
    verticals = []
    (-7..7).each do |y|
      verticals << [0, y] 
    end
    verticals 
  end

  def diagonal_movement 
    diagonals = []
    
    (-7..7).each do |i|
      x = i       
      y = i       
      diagonals << [x,y]
      diagonals << [x, -y]
      diagonals << [-x, y]
    end
    diagonals
  end

  def pos_horizontal(start_pos)
    horizontals = []
    horizontal_movement.each do |subarr|
      move = [subarr[0] + start_pos[0], 0]
      if valid_move?(move) && move != start_pos && !horizontals.include?(move)
        horizontals << move 
      end
    end
    horizontals
  end

  def pos_vertical(start_pos)
    verticals = []
    vertical_movement.each do |subarr|
      move = [0, subarr[1] + start_pos[1]]
      if valid_move?(move) && move != start_pos && !verticals.include?(move)
        verticals << move 
      end
    end
    verticals
  end
  
  def pos_diagnol?(start_pos)
    diagonals = []

    diagonal_movement.each do |subarr|
      move = [subarr[0] + start_pos[0], subarr[1] + start_pos[1]]
      if valid_move?(move) && move != start_pos && !diagonals.include?(move)
        diagonals << move 
      end
    end
    diagonals
  end

  def moves_dirs 

  end
end

class Piece

  attr_reader :color

  def initialize(start_pos)
    @start_pos = start_pos
    @grid = Board.new
    @color = color
  end

  def []=(pos)
    row, col = pos
    @grid[row][col] if valid_move?(pos)
  end

  def valid_move?(pos)
    valid = (0..7).to_a
    row, col = pos
    if valid.include?(row) && valid.include?(col)
     return true
    end
    false
  end

  def move_into_check(pos)

  end

  def to_s?
  end

  def empty?(pos)
    if @grid[pos].nil?
      return true
    end
    false
  end

  def moves 

  end

end

class Rook < Piece 
  include Slideable
  
  attr_reader :symbol
  
  def initialize(color)
    @symbol = :R
    @color = color
  end

  def moves?(start_pos)
    moves = []
    moves += pos_horizontal(start_pos) + pos_vertical(start_pos)
    return moves.uniq
  end
end


class Bishop < Piece 
  include Slideable

  attr_reader :symbol
  
  def initialize(color)
    @symbol = :B
    @color = color
  end

  def moves?(start_pos)
    pos_diagnol?(start_pos)
  end
end


class Queen < Piece 
  include Slideable

  attr_reader :symbol

  def initialize(color)
    @symbol = :Q
    @color = color
  end 

  def moves?(start_pos)
   moves = []
    moves += pos_horizontal(start_pos) + pos_vertical(start_pos) + pos_diagnol?(start_pos)
    return moves.uniq
  end
end

class King < Piece

  # def kings_moves
  #   moves = []
  #   (0..1).each do |i|
  #     x = i
  #     y = i
  #     moves << [x, y]
  #     moves << [-x, y]
  #     moves << [-x , -y]
  #     moves << [x, -y]
  #   end
  #   moves
  # end

  MOVES = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1,-1],
    [-1,0],
    [-1, 1]
  ]

  attr_reader :symbol

  def initialize(color)
    @symbol = :K
    @color = color
  end

  def pos_moves(start_pos)
    moves = []
    MOVES.each do |move|
      pos_m = [move[0] + start_pos[0], move[1] + start_pos[1]]
      moves << pos_m if valid_move?(pos_m)
    end
    moves
  end

  def moves?(start_pos)
    pos_moves(start_pos).uniq
  end
end

class Knight < Piece

  MOVES = [
    [-2, -1],
    [-2,  1],
    [-1, -2],
    [-1,  2],
    [ 1, -2],
    [ 1,  2],
    [ 2, -1],
    [ 2,  1]
  ]
  attr_reader :symbol

  def initialize(color)
    @symbol = :H
    @color = color
  end

  def pos_moves(start_pos)
    moves = []
    MOVES.each do |move|
      pos_m = [move[0] + start_pos[0], move[1] + start_pos[1]]
      moves << pos_m if valid_move?(pos_m)
    end
    moves
  end

  def moves?(start_pos)
    pos_moves(start_pos).uniq
  end
end

class Pawn < Piece

  def initialize(color)
    @symbol = :P
    @color = color
  end

  def moves?(start_pos)
    var = [0,1]
    var_first = [0,2]
    
    if start_pos[0] == 1 || start_pos[0] == 7
      pos = [var_first[0] + start_pos[0], var_first[1] + start_pos[1]]
    else
      pos = [var[0] + start_pos[0], var[1] + start_pos[1]]
    end
       
    if valid_move?(pos) # && @grid(pos).empty?
      return pos
    else
      raise 'Pwnd'
    end
  end
end

class NullPiece < Piece
  include Singleton
  def initialize
  end
end
