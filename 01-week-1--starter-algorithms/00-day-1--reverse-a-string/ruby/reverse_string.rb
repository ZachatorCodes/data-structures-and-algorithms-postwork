def reverse_string(str)
  # type your code in here
  newString = ""
  str.chars.each {|char| newString = char + newString}
  newString
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!

  puts "Expecting: 'yob gib'"
  puts "=>", reverse_string('big boy')
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# newString = ""
# for every char in string
#   newString = char + newString behind
# end
# newString