def my_uniq(arr)
  new_arr = []
  arr.each do |ele|
    new_arr << ele if !new_arr.include?(ele)
  end
  new_arr
end

def two_sum(arr)
  indices = []
  arr.each_with_index do |el1, i1|
    arr.each_with_index do |el2, i2|
      if i2 > i1
        indices << [i1, i2] if el1 + el2 == 0
      end
    end
  end
  indices
end

def my_transpose(twod_array)
  new_array = []
  twod_array.each do |rows|
    sub_arr = []
    rows.each do |column|
      sub_arr << column
    end
    new_array << sub_arr
  end
  return new_array
end

def stock_picker(days)
  num = 0
  new_arr = []
  (0...days.length - 1).each do |i|
    num = days[i + 1] - days[i] if days[i + 1] - days[i] > num
  end
  
end
