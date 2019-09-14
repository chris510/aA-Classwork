require 'byebug'

def my_min(arr)
  result = []
  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |i2|
      result << arr[i] if arr[i] < arr[i2]
    end
  end
  result.min
end


def better_my_min(arr)

  smallest = nil

  arr.each do |ele|
    smallest = ele if smallest == nil || smallest > ele
  end
  smallest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p better_my_min(list)  # =>  -5

# def largest_cont_subsum(arr)
#   result = []
#   arr.each_with_index do |ele, i|
#    arr[i..-1].each_with_index do |ele2, i2|
#     result << ele + ele2 if ele != ele2
#    end
#   end
#   result.max  
# end

# def better_largest_cont_subsum(arr)
#   largest = arr[0]
#   prev_largest = arr[0]
#   i = 0 
#   j = 1
#   # debugger
#   while i != arr.length - 1

#     if j == arr.length
#       i += 1
#       j = i
#       prev_largest = 0
      
#     end
#     prev_largest += arr[j]


#     if prev_largest > largest
#       largest = prev_largest
#     end  

#     j += 1
#   end
# largest
# end

list = [5, 3, -7]
# p better_largest_cont_subsum(list) # => 8
list2 = [2, 3, -6, 7, -6, 7]
# p better_largest_cont_subsum(list2) # => 8 (from [7, -6, 7])
list3 = [-5, -1, -3]
# p better_largest_cont_subsum(list3) # => -1 (from [-1])

def try(arr)
  large = arr[0]
  prev = 0
  i = 0

  while i != arr.length
    
    prev += arr[i]
    large = prev if prev > large

    prev = 0 if prev < 0
    i +=1
  end
  large
end

p try(list) # => 8
p try(list2) # => 8 (from [7, -6, 7])
p try(list3) # => -1 (from [-1])

