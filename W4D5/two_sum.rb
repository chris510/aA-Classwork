def bad_two_sum?(arr, target) #time complexity : n^2
  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |i2|
      return true if arr[i] + arr[i2] == target
    end
  end
  false
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, target)
  merge_sort(arr, target)
end

def merge_sort(arr, target)

  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[mid..-1]

  sorted_left = merge_sort(left)
  sorted_right = merge_sort(right)

  merge(sorted_left, sorted_right, target)
end

def merge(left, right, target)
  until left.empty? || right.empty?
    if left.shift + right.shift == target
      return true
    end
  end
end

# arr = [0, 1, 5, 7]
# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

# def bsearch(arr, target)

#   index = arr.length / 2
#   if arr[index] > target
#     bsearch(arr.take(index), target)
#   elsif arr[index] == target
#     index
#   else
#     temp = bsearch((index + 1), target)
#     temp.nil? ? nil : index + 1 + temp
#   end
#   nil
# end

# def two_sum?(arr, target)
#   hash = Hash.new(0)
#   arr.each do |num|
#     needed = target - num
#     return true if hash.has_key?(num) && target == num * 2
#     hash[num] += needed
#     return true if hash.has_key?(hash[num]) && num != hash[num]
#   end
#   false

# O(n) time complexity
# 0(n) space complexity

#method checks if the difference in what we're looking for is not in the hash. And then check adds it if its not there.
  #need both pair of numbers in order for the problem to be true.

# def two_sum?(arr, target)
#   complements = {}

#   arr.each do |el|
#     return true if complements[target - el]
#     complements[el] = true
#   end

#   false
# end

# def two_sum_indices(arr, target)
#   hash = {}
#   arr.each_with_index do |num, i|
#     diff = 
# end

# def two_sum_indices(arr, target_sum)
#   complements = {}
#   arr.each_with_index do |el, i|
#     complement, j = complements[target_sum - el] # these will both be nil if the complement doesn't exist
#     p "this is the complement"
#     p complements[target_sum - el]
#     return [i, j] if complement

#     complements[el] = [el, i]
#   end
#   nil
# end

def two_sum?(arr, target)
  hash = {}
  arr.each do |num|
    dif = target - num 
    return true if hash[dif] #checks if the difference is
    hash[num] = true
  end
  false
end

def two_sum_indices(arr, target)
  hash = {}
  result = []
  arr.each_with_index do |num, i|
    dif = target - num
    result << [arr[dif], i] if hash.has_key?(dif)
    hash[num] = i
  end
  return nil if result.empty?
  result
end

arr = [0, 1, 5, 7, 4]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false
p "-----"
p two_sum_indices(arr, 6) # true so [2, 1]
p two_sum_indices(arr, 10) # false so nil
