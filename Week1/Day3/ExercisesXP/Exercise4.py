""" Exercise 4 : Disney Characters
Use this list :
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
Analyse these results :
#1/
>>> print(disney_users_A)
{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#2/
>>> print(disney_users_B)
{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
#3/ 
>>> print(disney_users_C)
{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
1. Use a for loop to recreate the 1st result. Tip : dont hardcode the numbers.
2. Use a for loop to recreate the 2nd result. Tip : dont hardcode the numbers.
3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
Only recreate the 1st result for:
The characters, which names contain the letter “i”.
The characters, which names start with the letter “m” or “p”. """

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# 1. Use a for loop to recreate the 1st result.
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A)

# 2. Use a for loop to recreate the 2nd result.
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
disney_users_B = {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)

# 3. Use a method to recreate the 3rd result.
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
sorted_users = sorted(users)
disney_users_C = {}
for i in range(len(sorted_users)):
    disney_users_C[sorted_users[i]] = i
print(disney_users_C)

# Only recreate the 1st result for the characters, which names contain the letter “i”.
disney_users_D = {}
counter = 0
for i in range(len(users)):
    if "i" in users[i]:
        disney_users_D[users[i]] = counter
        counter +=1
print(disney_users_D)

# Only recreate the 1st result for the characters, which names start with the letter “m” or “p”.
disney_users_E = {}
counter = 0
for i in range(len(users)):
    current_name = users[i]
    if  current_name[0] == "M" or current_name[0] == "P":
        disney_users_E[users[i]] = counter
        counter +=1
print(disney_users_E)