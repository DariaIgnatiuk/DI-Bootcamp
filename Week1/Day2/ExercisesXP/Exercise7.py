""" Exercise 7: Favorite Fruits
Ask the user to input their favorite fruit(s) (one or several fruits).
Hint : Use the built in input method. Ask the user to separate the fruits 
with a single space, eg. "apple mango cherry".
Store the favorite fruit(s) in a list (convert the string of words into a list of words).
Now that we have a list of fruits, ask the user to input a name of any fruit.
If the users input is in the favorite fruits list, print “You chose one of your favorite fruits! 
Enjoy!”.
If the users input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”. """

string_fruits = input("Enter your favourite fruits separated by a single space ")
list_fruits  = string_fruits.split()
print(list_fruits)
any_fruit = input("Please enter a name of any fruit: ")
if any_fruit in list_fruits:
    print ("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")