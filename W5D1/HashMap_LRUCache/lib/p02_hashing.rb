class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    str = ""
    self.each { |num| str += num.to_s }
    str.to_i
  end
end

class String
  def hash
    alpha = ("a".."z").to_a
    str = ""
    self.each_char do |char|
      i = alpha.index(char)
      str += i.to_s
    end
    str.to_i
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    array = []
    self.each do |k,v|
      array << (k.to_s.hash) + v.hash
    end
    array.sort.hash
  end
  
end
