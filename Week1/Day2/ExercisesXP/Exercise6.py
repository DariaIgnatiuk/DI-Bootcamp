""" Exercise 6 : While Loop
Write a while loop that will 
continuously ask the user for their name, unless the input is equal to your name. """

my_name = "Daria"
user_name = ""
while my_name != user_name:
    user_name = input("Please enter your name: ")
print("You entered my name!")