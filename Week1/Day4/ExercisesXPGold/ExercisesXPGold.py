# Exercise 1 : When Will I Retire ?

# def get_age(year, month, day):
#     current_year = 2024
#     current_month = 8
#     current_day = 15
#     age = current_year - year
#     if month > current_month:
#         age -=1
#     elif month ==current_month:
#         if day >= current_day:
#             age -=1
#     return(age)

# def can_retire(gender, date_of_birth):
#     date = date_of_birth.split("/")
#     age = get_age(int(date[0]), int(date[1]), int(date[2]))
#     result = False
#     if gender == "m" and age >= 67:
#         result = True
#     if gender == "f" and age >= 62:
#         result = True
#     return result

# gender = input("What is your genger? Enter 'f' or 'm': ")
# date_of_birth = input("What is your date of birth? Enter it in form “yyyy/mm/dd”: ")
# result = can_retire(gender, date_of_birth)
# if result:
#     print("You can retire")
# else:
#     print("You can't retire yet. Time to work!")


# Exercise 2 : Sum

# number1 = input("Enter a number: ")
# number2 = number1 + number1
# number3 = number2 + number1
# number4 = number3 + number1
# result  = int(number1) + int(number2) + int(number3) + int(number4)
# print(result)

# Exercise 3 : Double Dice

import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    attempts = 1
    dice1 = throw_dice()
    dice2 = throw_dice()
    while dice1 != dice2:
        attempts += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
    return attempts

def main():
    attempts = []
    for i in range(100):
        attempts.append(throw_until_doubles())
    print(f"In took {sum(attempts)} to reach 100 doubles.")
    print(f"It took {sum(attempts)/len(attempts)} to reach double")

main()