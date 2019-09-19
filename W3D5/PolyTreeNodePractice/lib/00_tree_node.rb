module Searchable
    
end

class PolyTreeNode
	attr_reader :value, :parent, :children

	def initialize(value)
		@value = value
		@parent = nil
		@children = []
	end

	def parent=(other_parent)

		@parent = other_parent
		
	end
end

