# Exercise 1 : Hello World
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

# print("Hello world\n" * 4)


# Exercise 2
# Write code that calculates the result of: 
# (99^3)*8 (meaning 99 to the power of 3, times 8).

# print(99**3*8)


# Exercise 3 : What Is The Output ?
# Predict the output of the following code snippets:
# >>> 5 < 3 False
# >>> 3 == 3 True
# >>> 3 == "3" False
# >>> "3" > 3 Mistake (can't compare numbers with strings)
# >>> "Hello" == "hello" False

# print(5 < 3)
# print(3 == 3)
# print(3 == "3")
# print("3" > 3)
# print("Hello" == "hello")


# Exercise 4 : Your Computer Brand
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: 
# "I have a <computer_brand> computer".

# computer_brand = "MacBook"
# print(f"I have a {computer_brand} computer")


# Exercise 5 : Your Information
# Create a variable called name, and set its value to your name.
# Create a variable called age, and set its value to your age.
# Create a variable called shoe_size, and set its value to your shoe size.
# Create a variable called info and set its value to an interesting sentence about yourself. 
# The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

# name = "Daria"
# age = 35
# shoe_size = 35
# info = f"It's funny that {name} at the age of {age} sometimes buys shoes sized {shoe_size} in a children's deparnment"
# print(info)


# Exercise 6 : A & B
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

# a = 10
# b = 5
# if a > b:
#     print("Hello World")


# Exercise 7 : Odd Or Even
# Write code that asks the user for a number and determines whether this number is 
# odd or even.

# number = input("Please enter a number: ")
# number = int(number)
# if number % 2 == 0:
#     print(f"Number {number} is even")
# else:
#     print(f"Number {number} is odd")


# Exercise 8 : Whats Your Name ?
# Write code that asks the user for their name and determines whether or not you have the same name, 
# print out a funny message based on the outcome.

# my_name = "Daria"
# user_name = input("Please enter your name: ")
# user_name = user_name.capitalize()
# if my_name == user_name:
#     print(F"Hey, {user_name}! We have the same name!")
# else:
#     print(F"Nice to meet you, {user_name}! I'm {my_name}!")


# Exercise 9 : Tall Enough To Ride A Roller Coaster
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

# height = input("How tall are you? ")
# height = int(height)
# if height > 145:
#     print("You are tall enough to ride!")
# else:
#     print(f"You still need to grow a little! {145 - height} sm to go!")