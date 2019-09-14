# def first_anagram?(word1, word2)
#   perms = word1.split("")
#   arr = perms.permutation.to_a
#   arr.join.include?(word2)
# end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

# def second_anagram?(word1, word2)
#   return false if word1.length != word2.length

#   word1.each_char.with_index do |char1, i1|
#     if word2.include?(char1)
#       word2.index(char1) == ""
#     else
#       return false
#     end
#   end
#   true
# end

# p second_anagram?("gizmo", "sally")  #=> false
# p second_anagram?("elvis", "lives") #=> true

def third_anagram?(word1, word2)
  word1.split('').sort == word2.split('').sort
end

  # p third_anagram?("gizmo", "sally")  #=> false
  # p third_anagram?("elvis", "lives") #=> true

def fourth_anagram?(word1, word2)

  hash = Hash.new(0)

  word1.each_char { |char| hash[char] += 1 }

  word2.each_char do |char2|
    hash[char2] -= 1
    hash.delete(char2) if hash[char2] == 0
  end

  hash.empty?
end

p fourth_anagram?("gizmo", "sally")  #=> false
p fourth_anagram?("elvis", "lives") #=> true