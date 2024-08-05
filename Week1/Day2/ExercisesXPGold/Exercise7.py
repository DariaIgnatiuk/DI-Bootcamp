""" Exercise 7: Min, Max, Sum
Create a list of numbers from one to one million and then use min() and max() 
to make sure your list actually starts at one and ends at one million. 
Use the sum() function to see how quickly Python can add a million numbers. """

numbers_list = [i for i in range(1, 1000001)]
print(min(numbers_list))
print(max(numbers_list))
print(sum(numbers_list))