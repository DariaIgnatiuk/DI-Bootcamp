class Farm:

    def __init__(self, name) -> None:
        self.name = name
        self.animals = {}
    
    def add_animal(self, animal, count = 1):
        if animal not in self.animals:
            self.animals[animal] = count
        else:
            self.animals[animal] += count

    def get_info(self):
        farm = f"{self.name}'s farm\n"
        animals = ""
        for key in self.animals:
            animals += f"{key} : {self.animals[key]}\n"
        ei = "\n     E-I-E-I-0!"
        return f"{farm}\n{animals}{ei}"
    
    def get_animal_types(self):
        animals_types = []
        for key in self.animals:
            animals_types.append(key)
        return(animals_types)

    def get_short_info(self):
        animal_types = self.get_animal_types()
        string = f"{self.name}'s farm has"
        # for key in animal_types:
        #     string += f" {key}s," 
        for i in range(len(animal_types) - 1):
            string += f" {animal_types[i]}s,"
        string += f" and {animal_types[i + 1]}s."
        return string 



macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
