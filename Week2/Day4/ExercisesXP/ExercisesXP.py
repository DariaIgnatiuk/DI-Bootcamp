# Exercise 1 – Random Sentence Generator

# import random 

# def get_words_from_file():
#     f = open('word_list.txt')
#     data = f.read()
#     f.close()
#     print(type(data))
#     split_data =data.split("\n")
#     return split_data

# def get_random_sentence(length):
#     if length >= 2 and  length<= 20:
#         sentance = ""
#         for i in range(length):
#             sentance += random.choice(word_list) + " "
#         return sentance.lower()
#     else:
#         raise Exception("You input incorrect data")

# word_list = get_words_from_file()
# print("This creates a random sentance. The length of the sentance is based on the user imput.")
# length = input("Please enter a number between 2 and 20: ")
# try:
#     print(get_random_sentence(int(length)))
# except Exception as a:
#      print(a)


# Exercise 2 Working With JSON

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# access salary
JSONdict = json.loads(sampleJson)
salary = JSONdict["company"]["employee"]["payable"]["salary"]
print(salary)

# add “birth_date”
JSONdict["company"]["employee"]["birth_date"] = "01.01.1989"

# save the dictionary as JSON to a file

json_file = "my_json_file.json"

with open(json_file, 'w') as file_obj:
    json.dump(JSONdict, file_obj)