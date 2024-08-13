# Exercise 1 : Pets

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):

#     def __init__(self, name, age, sound):
#         super().__init__(name, age)
#         self.sound = sound

#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):

#     def __init__(self, name, age, sound):
#         super().__init__(name, age)
#         self.sound = sound

#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):

#     def __init__(self, name, age, sound):
#         super().__init__(name, age)
#         self.sound = sound

#     def sing(self, sounds):
#         return f'{sounds}'
        

# spot = Bengal("Spot", 3, "Meow")
# snow = Chartreux("Snow", 5, "Meow")
# luna = Siamese("Luna", 10, "Hiss")

# all_cats = [spot, snow, luna]
# sara_pets = Pets(all_cats)
# sara_pets.walk()


# Exercise 2 : Dogs

class Dog:

    def __init__(self, name, age, weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        print(f"{self.name} is barking")

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * self.weight:
            print(f"{self.name} wins {other_dog.name}")
        else:
            print(f"{other_dog.name} wins {self.name} ")

if __name__ == "__main__":
    dog1 = Dog("Archie", 5, 10)
    dog2 = Dog("Buddy", 3, 5)
    dog3 = Dog("Nika", 12, 25)

    dog1.fight(dog2)
    dog1.fight(dog3)
    dog2.fight(dog3)
 


