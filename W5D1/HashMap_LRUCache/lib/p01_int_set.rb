class MaxIntSet
  attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(max)
  end

  def insert(num)
    raise "Out of bounds" if num > @max
    raise "Out of bounds" if num <= 0
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    i = num % 20
    store[i] << num
  end

  def remove(num)
    i = num % 20
    @store[i].delete(num)
  end

  def include?(num)
    i = num % 20
    @store[i].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store, :tracker

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
    @tracker = []
  end

  def insert(num)

    i = num % num_buckets
    
    unless self.include?(num)
      @store[i] << num
      @count += 1
      tracker << num  

      if count >= self.num_buckets
        resize!
      end
    end
    
  end

  def remove(num)
    i = num % num_buckets
    if self.include?(num)
      @store[i].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    i = num % num_buckets
    @store[i].include?(num)
  end
  
 
  
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end
  
  def num_buckets
    @store.length
  end

  private
  
  def resize!
    @num_buckets = num_buckets * 2
      
    @store = Array.new(@num_buckets) {Array.new}
      tracker.each do |num|
        i = num % @num_buckets
        @store[i] << num
    end     
  end
  @store
end
