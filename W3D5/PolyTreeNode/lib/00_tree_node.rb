module Searchable

    def dfs(target)
        return node if self.value == target
        self.children.each do |child|
            found = child.dfs(target)
            return found unless found.nil?
        end
      nil
    end
    
end

class PolyTreeNode
  include Searchable
  
    attr_accessor :value, :parent
    attr_reader :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)

        self.parent.children.delete(self) unless self.parent.nil?

        @parent = new_parent
        return nil if self.parent.nil?
        if !self.parent.children.include?(self) && !self.parent.nil?
            self.parent.children << self
        end
    end

    def add_child(child)
      child.parent = self
    end

    def remove_child(child)
      if @children.include?(child)
        child.parent = nil
      else
        raise "Child does not exist!"
      end
    end

end

