# my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

class Map

  attr_reader :array

  def initialize
    @array = []
  end

  def set(key, value)
    dubs_idx = array.index { |dubs| dubs[0] == key }
    if dubs_idx
      array[dubs_idx][1] = value 
    else
      array << [key, value]
    end
    value
  end

  def get(key)
    array.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def delete(key)
    value = get(key)
    array.reject! { |pair| pair[0] == key }
  end

  def show
    deep_dup(array)
  end
  
  def deep_dup(arr) #creates a copy of the flattened array.
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el } #
  end  

end