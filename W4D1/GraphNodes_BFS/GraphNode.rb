class GraphNode

  attr_accessor :value, :neighbors

  def initialize(value)
    @value = value
    @neighbors = []
  end

  def neighbors=(node)
    self.neighbors << node
  end

  # def bfs(starting_node, target_value)
  # queue = [starting_node]
  # visited = Set.new()

  # until queue.empty?
  #   node = queue.shift
  #   unless visited.include?(node)
  #     return node.val if node.val == target_value
  #     visited.add(node)
  #     queue += node.neighbors
  #   end
  # end
  
  return nil

  # def bfs(target = nil, &prc)
  #   raise "Need a proc or target" if [target, prc].none?
  #   prc ||= Proc.new { |node| node.value == target }

  #   nodes = [self]
  #   until nodes.empty?
  #     node = nodes.shift

  #     return node if prc.call(node)
  #     nodes.concat(node.children)
  #   end

  #   nil
  # end

end


a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]