# 1. What Are You Learning ?

# def display_message():
#     return "We are learning Python"
# print(display_message())

# 2. What’s Your Favorite Book ?

# def favorite_book(title):
#     print(f"One of my favorite books is {title}")
# favorite_book("Harry Potter and the Order of Phoenix")

# 3. Some Geography

# def describe_city(city, country = "Israel"):
#     print(f"{city} is in {country}")
# describe_city("Seoul","South Korea") 
# describe_city("Tel Aviv")

# 4. Random

# import random
# def guess_number (user_number):
#     random_number = random.randint(0, 100)
#     if user_number == random_number:
#         print("Success!")
#     else:
#         print(f"You failed to guess the number. Your numbers is {user_number} and random number is {random_number}")
# guess_number(input("Please enter a number between 0 and 100 "))

# 5. Let’s Create Some Personalized Shirts !

# def make_shirt(size = "L", text = "I love Python"):
#     print(f"The size of the shirt is {size} and the text is {text}")
# make_shirt()
# make_shirt("M")
# make_shirt("S","Hi there")
# make_shirt(text = "Have a good day!", size = "M")

# 6. Magicians

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magicians):
#     for name in magicians:
#         print(name)

# def make_great(magicians):
#     for i in range(len(magicians)):
#         magician_names[i] = magicians[i] + " the Great"

# show_magicians(magician_names)
# make_great(magician_names)
# show_magicians(magician_names)

# 7. Temperature Advice

# import random

# def get_random_temp(season):
#     if season == "winter":
#         return round(random.uniform(-10.0, 16.0), 1)
#     elif season == "sprint":
#         return round(random.uniform(16.0, 27.0), 1)
#     elif season == "summer":
#         return round(random.uniform(28.0, 40.0), 1)
#     else:
#         return round(random.uniform(16.0, 32.0), 1)
    
# def season(month):
#     if month == 12 or month <= 2:
#         season = "winter"
#     elif month <= 5:
#         season = "spring"
#     elif month <= 8:
#         season = "summer"
#     else:
#         season = "autumn"

# def main():
#     season(int(input("Please enter the number of the current month: ")))
#     temperature = get_random_temp(season)
#     print(f"The temperature right now is {temperature} degrees Celsius.")
#     if temperature < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif temperature < 16:
#         print("Quite chilly! Don’t forget your coat")
#     elif temperature <= 23:
#         print("It's still too cold to swim")
#     elif temperature < 32:
#         print("I hope your AC works")
#     else:
#         print("Too hot! Better stay home!") 

# main()

# 8. Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

correct_answers = 0
incorrect_answers = 0
wrong_answers = []

def quiz(data):
    global correct_answers
    global incorrect_answers
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    for i in range(len(data)):
        current_question = data[i]
        answer = input(f"{current_question["question"]} : ")
        if answer == current_question["answer"]:
            correct_answers += 1
        else:
            incorrect_answers += 1
            current_question["your answer"] = answer
            wrong_answers.append(current_question) 

def results():
    print(f"{correct_answers} - correct answers")
    print(f"{incorrect_answers} - incorrect answers")
    for answer in wrong_answers:
        print(answer)
while correct_answers < 3:
    quiz(data)
    results()
