class HashSet
  attr_reader :count, :store

  def initialize(num_buckets = 8)
    @num_buckets = num_buckets
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    @store << key
    @count += 1

    resize! if @count >= @num_buckets
  end

  def include?(key)
    @store.include?(key)
  end

  def remove(key)
    if self.include?(key)
      @store.delete(key) 
      @count -= 1
    end
  end
  
  # def num_buckets
  #   @num_buckets = num_buckets
  # end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  

  def resize!
    @num_buckets = @num_buckets * 100

  

  end
end
