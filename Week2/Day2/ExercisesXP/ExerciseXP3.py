# Exercise 3 : Dogs Domesticated

import random

from ExercisesXP1_2 import Dog

class PetDog(Dog):

    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *args):
        friends = ""
        for arg in args:
            friends += f" {arg}"
        print(f"{self.name} {friends} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} isn't trained and cannot do tricks")


dog1 = PetDog("Archie", 5, 10)
dog2 = PetDog("Buddy", 3, 5)
dog3 = PetDog("Nika", 12, 25)
dog1.train()
dog1.play(dog2.name, dog3.name)
dog1.do_a_trick()
dog2.do_a_trick()