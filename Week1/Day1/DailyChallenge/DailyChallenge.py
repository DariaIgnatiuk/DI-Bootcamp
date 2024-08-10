'''
1. Using the input function, ask the user for a string. The string must be 10 characters long.
If its less than 10 characters, print a message which states “string not long enough”.
If its more than 10 characters, print a message which states “string too long”.
If its 10 characters, print a message which states “perfect string” and continue the exercise.

2. Then, print the first and last characters of the given text.

3. Using a for loop, construct the string character by character: Print the first character, 
then the second, then the third, until the full string is printed. For example:
The user enters "HelloWorld"
Then, you have to construct the string character by character
H
He
Hel
etc
HelloWorld

4. Bonus: Swap some characters around then print the newly jumbled string 
(hint: look into the shuffle method). For example:
Hlrolelwod
'''
# task 1

my_string = input("Please enter a string. It must be 10 characters long: ")
if len(my_string) == 10:
    print("perfect string")
elif len(my_string) < 10:
    print("string not long enough")
else: 
    print("string too long")

# task 2
print(f"The first letter of the string is: {my_string[0]} and the last letter of the string is: {my_string[len(my_string)-1]}")

# task 3
for step in range(1, len(my_string) + 1):
    print(my_string[0:step])

# task 4
import random
my_string_shuffled = ''.join(random.sample(my_string, len(my_string)))
print(my_string_shuffled)

