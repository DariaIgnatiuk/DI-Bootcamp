""" Exercise 2 : List Of Integers
Given a list of 10 integers to analyze. For example:
    [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
    [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
    [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
    [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
1. Store the list of numbers in a variable.
2. Print the following information:
a. The list of numbers – printed in a single line
b. The list of numbers – sorted in descending order (largest to smallest)
c. The sum of all the numbers
3. A list containing the first and the last numbers.
4. A list of all the numbers greater than 50.
5. A list of all the numbers smaller than 10.
6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
7. The numbers without any duplicates – also print how many numbers are in the new list.
8. The average of all the numbers.
9. The largest number.
10.The smallest number.
11.Bonus: Find the sum, average, largest and smallest number without using built 
in functions.
12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 
numbers between -100 and 100. Ask the user for an integer between -100 and 100 – r
epeat this question 10 times. Each number should be added into a variable 
that you created earlier.
13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers 
yourself. Make sure that these random integers are between -100 and 100.
14.Bonus: Instead of always generating 10 integers, let the amount of integers 
also be random! Generate a random positive integer no smaller than 50.
15.Bonus: Will the code work when the number of random numbers is not equal to 10? """

# 1. Store the list of numbers in a variable.
# numbers_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 
# numbers between -100 and 100. Ask the user for an integer between -100 and 100 – 
# repeat this question 10 times. Each number should be added into a variable 
# that you created earlier.

# numbers_list = []
# for i in range(0, 10):
#    numbers_list.append(int(input("Please enter a number between -100 and 100: ")))

# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers 
# yourself. Make sure that these random integers are between -100 and 100.

# import random
# numbers_list = []
# for i in range(0, 10):
#    numbers_list.append(random.randint(-100, 100))

# 14. Bonus: Instead of always generating 10 integers, let the amount of integers 
# also be random! Generate a random positive integer no smaller than 50.

import random
amount = random.randint(50, 100)
numbers_list = []
for i in range(0, amount):
    numbers_list.append(random.randint(-100, 100))

# 2. Print the following information:
# a. The list of numbers – printed in a single line
# b. The list of numbers – sorted in descending order (largest to smallest)
# c. The sum of all the numbers
print(numbers_list)
print(f" The list of numbers – sorted in descending order: {sorted(numbers_list)}")
print(f"The sum of all the numbers: {sum(numbers_list)}")

# 3. A list containing the first and the last numbers.
first_last_list = []
first_last_list.append(numbers_list[0])
first_last_list.append(numbers_list[-1])
print(f"A list containing the first and the last numbers: {first_last_list}")

# 4 A list of all the numbers greater than 50.
list_greater_50 = []
for i in range(0, len(numbers_list)):
    if numbers_list[i] > 50:
        list_greater_50.append(numbers_list[i])
print(f"A list of all the numbers greater than 50: {list_greater_50}")

# 5. A list of all the numbers smaller than 10.
list_smaller_10 = []
for i in range(0, len(numbers_list)):
    if numbers_list[i] < 10:
        list_smaller_10.append(numbers_list[i])
print(f"A list of all the numbers smaller than 10: {list_smaller_10}")

# 6. A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
list_squared = []
for i in range(0, len(numbers_list)):
    list_squared.append(numbers_list[i] ** 2)
print(f"A list of all the numbers squared: {list_squared}")

# 7. The numbers without any duplicates – 
# also print how many numbers are in the new list.
list_no_duplicates = []
for i in range(0, len(numbers_list)):
    if numbers_list[i] not in list_no_duplicates:
        list_no_duplicates.append(numbers_list[i])
print(f"The numbers without any duplicates: {list_no_duplicates}")
print(f"There are {len(list_no_duplicates)} numbers on this list")

# 8. The average of all the numbers.
print(f"The average of all the numbers: {round(sum(numbers_list)/len(numbers_list))}")

# 9. The largest number
largest_number = numbers_list[0]
for i in range (1, len(numbers_list)):
    if numbers_list[i] > largest_number:
        largest_number = numbers_list[i]
print(f"The largest number: {largest_number}")

# 10. The smallest number
smallest_number = numbers_list[0]
for i in range (1, len(numbers_list)):
    if numbers_list[i] < smallest_number:
        smallest_number = numbers_list[i]
print(f"The smallest number: {smallest_number}")

# Find the sum, average, largest and smallest number without using built 
# in functions

numbers_sum = 0
for i in range (0, len(numbers_list)):
    numbers_sum += numbers_list[i]
print(f"The sum is: {numbers_sum}")