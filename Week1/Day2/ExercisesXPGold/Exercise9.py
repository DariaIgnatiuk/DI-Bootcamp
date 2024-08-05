""" Exercise 9 : Random Number
Ask the user to input a number from 1 to 9 (including).
Get a random number between 1 and 9. Hint: random module.
If the user guesses the correct number print a message that says Winner.
If the user guesses the wrong number print a message that says better luck next time.
Bonus: use a loop that allows the user to keep guessing until they want to quit.
Bonus 2: on exiting the loop tally up and display total games won and lost. """

user_number = int(input("Please input a number from 1 to 9: "))
import random
list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
random_number = random.choice(list1)
counter = 1
while user_number != random_number:
    user_number = int(input("Best luck next time! Keep guessing: "))
    counter += 1
print(f"Winner! You guesses the number in {counter} tries")