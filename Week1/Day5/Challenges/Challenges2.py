# Exercise 1

# for i in range(1, 7, 2):
#     number_spaces = (5 - i) // 2
#     spaces = ""
#     stars = ""
#     if number_spaces != 0:
#         for j in range(number_spaces):
#             spaces += " "
#     for j in range(i):
#         stars += "*"
#     print(spaces, stars, spaces)

# for i in range(1, 6):
#     spaces = ""
#     stars = ""
#     for j in range(i):
#         stars += "*"
#     if 5 - i != 0:
#         for j in range(5 - i):
#             spaces += " "
#     print(spaces, stars)

# for i in range(1, 6):
#     spaces = ""
#     stars = ""
#     for j in range(i):
#         stars += "*"
#     if 5 - i != 0:
#         for j in range(5 - i):
#             spaces += " "
#     print(stars, spaces)
# for i in range(5, 0, -1):
#     spaces = ''
#     stars = ""
#     for j in range(i):
#         stars += "*"
#     if 5 - i != 0:
#         for j in range(5 - i):
#             spaces += " "
#     print(spaces,stars)


# Exercise 2

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range( i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)


#This code sorts the list from lowest to biggest