'''
Exercise 8 : Whats Your Name ?
Write code that asks the user for their name and determines whether or not you have the same name, 
print out a funny message based on the outcome.
'''

my_name = "Daria"
user_name = input("Please enter your name: ")
user_name = user_name.capitalize()
if my_name == user_name:
    print(F"Hey, {user_name}! We have the same name!")
else:
    print(F"Nice to meet you, {user_name}! I'm {my_name}!daria")