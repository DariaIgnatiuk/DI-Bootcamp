# Exercise 1 : Cars

# string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
# # Convert it into a list using Python (don’t do it by hand!).
# cars = string.split(", ")
# print(cars)

# # Print out a message saying how many manufacturers/companies are in the list.
# print(f"There are {len(cars)} manufacturers/companies in the list")

# # Print the list of manufacturers in reverse/descending order (Z-A).
# reserve_cars = cars[::-1]
# print(reserve_cars)
# cars.sort(reverse = True)
# print(cars)


# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string 
# with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), 
# also print out a message saying how many companies are now in the list.

cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_set = set(cars)
cars = list(cars_set)
print(cars)
sentance = ""
for i in range(len(cars)-1):
    sentance += f"{cars[i]}, "
sentance += f"{cars[len(cars) - 1]}, "
print(f"{sentance}. There are {len(cars)} companies on the list.")
cars_reversed = []
for car in cars:
    car = car[::-1]
    cars_reversed.append(car)
cars = cars_reversed 
cars.sort(reverse = True)
print(cars)
