require_relative "board"
require "colorize"

class Display

  def initialize(cursor_pos)
    @cursor = Cursor.new([0,0])
    @board = board
  end
end