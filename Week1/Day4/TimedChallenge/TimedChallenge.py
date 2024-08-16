user_string = input("Enter your sentance: ")
user_character = input("Enter your characher: ")
number = 0
for char in user_string:
    if char == user_character:
        number += 1
print(number)