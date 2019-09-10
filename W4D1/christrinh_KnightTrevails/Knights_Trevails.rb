require_relative "00_tree_node.rb"

class KnightPathFinder

  # attr_reader :x, :y
  def self.check_valid_moves(pos)
    possible = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [-1, 2],
      [1, -2],
      [-1, -2]
    ]
    valids = []
    start_x = pos[0]
    start_y = pos[1]
    possible.each do |pos_check|
      x = pos_check[0]
      y = pos_check[1]
      possible_pos = [start_x + x, start_y + y]
      if KnightPathFinder.check_pos(possible_pos)
        valids << possible_pos
      end
    end
    valids
  end

  def self.check_pos(pos)
    board = (0..7).to_a
    return true if pos.length == 2 && board.include?(pos[0]) && board.include?(pos[1])
    false
  end

  def initialize(position) #ex ([1, 2])
    @root_node = PolyTreeNode.new(position)
    @considered_positions = [position]
    self.build_move_tree(@root_node)
  end

# def build_move_tree #queue
#   node_queue = [@root_node]

#   until node_queue.empty?
#     valid_moves = KnightPathFinder.check_valid_moves(node_queue[0].value)
    
#     new_moves = valid_moves.select {|move| !@considered_positions.include?(move)}
#     @considered_positions += new_moves
#     new_moves.each do |next_move|
#       new_node = PolyTreeNode.new(next_move)

#       new_node.parent=(node_queue[0])

#       node_queue.push(new_node)
#     end
#     node_queue.shift
#   end
# end

#change initailize method
  def build_move_tree(prev_node) #recursive
    valid_moves = KnightPathFinder.check_valid_moves(prev_node.value)
    
    new_moves = valid_moves.select {|move| !@considered_positions.include?(move)}
    @considered_positions += new_moves
    return true if new_moves.empty?
      new_moves.each do |move_pos|
        current_node = PolyTreeNode.new(move_pos)
        current_node.parent = prev_node
        build_move_tree(current_node)
      end
    false
  end

  def find_path(target_pos)
    @root_node.bfs(target_pos)
  end

  def trace_path_back(target_pos)
    final_position = find_path(target_pos)
    path = [final_position]
    until path[-1] == @root_node
      path << path[-1].parent
    end
    values = []
    path.each { |node| values << node.value }
    values
  end

end

finder = KnightPathFinder.new([0,0])
p finder.trace_path_back([6,3])
