""" Exercise 5: For Loop
1. Use a for loop to print all numbers from 1 to 20, inclusive.
2. Using a for loop, that loops from 1 to 20(inclusive), 
print out every element which has an even index. """

numbers = list(range(1, 21))

for i in range (0, 20):
    print(numbers[i])

for i in range (0, 20):
    if numbers[i] % 2 == 0:
        print(numbers[i])

