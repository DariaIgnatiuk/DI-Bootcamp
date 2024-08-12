# Exercise 4 : Family

class Family:

    def __init__(self, members, last_name) -> None:
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)

    def family_presentation(self):
        print(f"This is the {self.last_name} family\n")
        for member in self.members:
            print(member)

    def is_18(self, name):
        member_in_question = {}
        for member in self.members:
            if member["name"] == name:
                member_in_question = member
        return not member_in_question["is_child"]


# family =[
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]
# smiths = Family(family, "Smith")
# smiths.family_presentation()
# smiths.born(name = 'Aviv',age = 0, gender = 'Male', is_child = True)
# smiths.family_presentation()
# print(f"Is Michael an adult? {smiths.is_18('Michael')}")
# print(f"Is Aviv an adult? {smiths.is_18('Aviv')}")


# Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):

    def use_power(self, name):
        member_in_question = {}
        for member in self.members:
            if member["name"] == name:
                member_in_question = member
        if not member_in_question["is_child"]:
            print(f"{name}'s power is {member_in_question['power']}")
        else:
            raise Exception(f"{member_in_question["name"]} is not over 18 yet.")

    def incredible_presentation(self):
        print("\n** Here is our powerful family **\n")
        super().family_presentation()


family_incredibles =     [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
incredibles = TheIncredibles(family_incredibles, "Parr")
incredibles.incredible_presentation()
incredibles.born(name = 'Aviv',age = 0, gender = 'Male', is_child = True, power = "Unknown power", incredible_name = "SuperBoss")
incredibles.incredible_presentation()
try:
    incredibles.use_power("Sarah")
    incredibles.use_power("Aviv")
except Exception as a:
    print(a)