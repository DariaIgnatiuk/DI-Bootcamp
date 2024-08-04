'''
Exercise 5: Longest Word Without A Specific Character
Keep asking the user to input the longest sentence they can without the character “A”.
Each time a user successfully sets a new longest sentence, print a congratulations message.
'''

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