""" Exercise 1: Concatenate Lists
Write code that concatenates two lists together without using the + sign. """

list1 = [1, 2, 3]
list2 = [4, 5, 6]

for i in range (0, len(list2)):
    list1.append(list2[i])

print(list1)