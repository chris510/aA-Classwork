require_relative 'tic_tac_toe'`

class TicTacToeNode

  attr_accessor :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)

  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    if @next_mover_mark == :x
      next_mark = :o
    elsif @next_mover_mark == :o
      next_mark = :x
    end
    childs = []
    @board.rows.each_with_index do |row, r_idx|
      row.each_with_index do |col, c_idx|
        if col.nil?
          childs << TicTacToeNode.new(@board.dup, next_mark, [r_idx, c_idx])
        end
      end
    end
    childs
  end
end
