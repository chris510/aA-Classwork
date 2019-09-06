class Queue
  attr_reader :array 
 def initialize
    @array = []
  end

  def enqueue(el) #puts element into the end of the arr
    array.push(el)
    el
  end

  def dequeue #removes first element
    array.shift
  end

  def peek
    array.first #looks at the next element that is queue
  end
  
end