# Exercise 3 : Outputs
# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9 True
#     >>> 3 == 3 == 3 True
#     >>> bool(0) False
#     >>> bool(5 == "5") False
#     >>> bool(4 == 4) == bool("4" == "4") True
#     >>> bool(bool(None)) False

#     x = (1 == True)
#     y = (1 == False)
#     a = True + 4
#     b = False + 10

#     print("x is", x) True
#     print("y is", y) False
#     print("a:", a) 5
#     print("b:", b) 10

# print(3 <= 3 < 9)
# print(3 == 3 == 3 )
# print(bool(0))
# print(5 == "5")
# print(bool(4 == 4) == bool("4" == "4"))
# print(bool(bool(None)))

# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("x is", x)
# print("y is", y)
# print("a:", a)
# print("b:", b)


# Exercise 4 : How Many Characters In A Sentence ?
# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).
# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum.

# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
# print(f"The number of charachters in this long line is {len(my_text)}")


# Exercise 5: Longest Word Without A Specific Character
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

longest_sentance = ""
for step in range(1, 10):
    current_sentance = input("Please enter the lonest sentance you can without the character “A”")
    if ("A" in current_sentance) or ("a" in current_sentance):
          print("There is 'A' in your sentance! Try again")
    elif len(current_sentance) > len(longest_sentance):
            longest_sentance = current_sentance
            print("Congratulations!")
    else: 
        print("This is now the lonest sentance! Try again!")