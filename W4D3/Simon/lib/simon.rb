class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @game_over = false
    @sequence_length = 1
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence 
    require_sequence
    
    if @game_over == false
      @sequence_length += 1
      round_success_message
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      p color
    end
  end

  def require_sequence
    puts "Repeat the sequence by entering the first letter of each color on a new line."
    @seq.each do |color|
      user_color = gets.chomp #get the color from the user
      if color[0] != user_color
        @game_over = true
        break
      end
    end
  end

  def add_random_color
    colors = ["red", "blue", "yellow", "green"]
    random_color = colors.sample
    seq << random_color
  end

  def round_success_message
    "Good round! You been through #{sequence_length - 1} rounds!"
  end

  def game_over_message
    "Game is over!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
