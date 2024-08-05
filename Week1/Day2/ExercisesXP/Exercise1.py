""" Exercise 1 : Favorite Numbers
Create a set called my_fav_numbers with all your favorites numbers.
Add two new numbers to the set.
Remove the last number.
Create a set called friend_fav_numbers with your friends favorites numbers.
Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers. """
 
my_fav_numbers = {21, 1, 3, 9, 33, 57}
my_fav_numbers.add(100)
my_fav_numbers.add(777)
my_fav_numbers.pop()
friend_fav_numbers = {1, 2, 3, 4, 5}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)