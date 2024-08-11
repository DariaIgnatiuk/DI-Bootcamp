# Exercise 1: Cats

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# sonya = Cat("Sonya", 15)
# shunya = Cat("Shunya", 6)
# klyaksik = Cat("Klyaksik", 1)

# cats = [shunya, sonya, klyaksik]

# def oldest_cats(cats):
#     oldest_cat = cats[0]
#     for i in range(1, 3):
#         if cats[i].age > oldest_cat.age:
#             oldest_cat = cats[i]
#     return oldest_cat

# oldest_cat = oldest_cats(cats)
# print(f"The oldest cat is {oldest_cat.name}, they are {oldest_cat.age}")


# Exercise 2 : Dogs

# class Dog:
#     def __init__(self, name, height) -> None:
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2} sm high!")

#     def __repr__(self) -> str:
#         return f"Dog's name: {self.name}, dog's height: {self.height}"

# davids_dog = Dog("Rex", 50)
# print(davids_dog)
# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog = Dog("Teacup",20)    
# print(sarahs_dog)
# sarahs_dog.bark()
# sarahs_dog.jump()
# if davids_dog.height > sarahs_dog.height:
#     print(f"{davids_dog.name} is bigger")
# else:
#     print(f"{sarahs_dog.name} is bigger")


# Exercise 3 : Who’s The Song Producer?

# class Song:

#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for string in self.lyrics:
#             print(string)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo

class Zoo:
    """
    Method __init__ that takes one parameter: zoo_name.
    It instantiates two attributes: animals (an empty list) and name (name of the zoo).
    """
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
        self.animals_sorted = {}
    
    def add_animal(self, new_animal):
        """
        This method takes one parameter new_animal. This method adds the new_animal to the animals list 
        as long as it isn’t already in the list.
        """
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animal(self):
        """
        This method prints all the animals of the zoo
        """
        print("All the animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        """
        This method removes the animal from the list and of course the animal 
        needs to exist in the list. This method akes one parameter animal_sold
        """
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"There's no {animal_sold} in the zoo")

    def sort_animals(self):
        """
        This method sorts the animals alphabetically and groups them together based on their first letter.
        """
        self.animals.sort()
        key = 1
        self.animals_sorted = {key:[self.animals[0]]}
        for i in range(1, len(self.animals)):
            animal_list = self.animals_sorted[key]
            animal_list_first = animal_list[0]
            next_animal = self.animals[i]
            if animal_list_first[0] != next_animal[0]:
                key +=1
                self.animals_sorted[key] = []
            self.animals_sorted[key].append(self.animals[i])

    def get_groups(self):
        """
        This method prints the animal/animals inside each group.
        """
        for key in self.animals_sorted:
            print(f"{key} : {self.animals_sorted[key]}")
       


# creating an item of the class Zoo
ramat_gan_safari = Zoo("Ramat Gan Zoo")
# adding animals
ramat_gan_safari.add_animal("ape")
ramat_gan_safari.add_animal("racoon")
ramat_gan_safari.add_animal("baboon")
ramat_gan_safari.add_animal("emu")
ramat_gan_safari.add_animal("cougar")
ramat_gan_safari.add_animal("cat")
ramat_gan_safari.add_animal("eel")
ramat_gan_safari.add_animal("bear")
# printing a list of all the animals
ramat_gan_safari.get_animal()
# selling an animal
ramat_gan_safari.sell_animal("racoon")
#sorting the animals
ramat_gan_safari.sort_animals()
# printing the groups of animals
ramat_gan_safari.get_groups()

    
