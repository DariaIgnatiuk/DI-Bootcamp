# Exercise 1: Currencies

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __repr__(self):
#         return f"{self.amount} {self.currency}s"

#     def __str__(self):
#         return f"{self.amount} {self.currency}s"
    
#     def __int__(self):
#         return self.amount
    
#     def __add__(self, other_amount):
#         if isinstance(other_amount, (int, float)):
#             return self.amount + other_amount
#         else:
#             if self.currency == other_amount.currency:     
#                 return self.amount + other_amount.amount 
#             else:
#                 raise Exception(f"TypeError: Cannot add between Currency type {self.currency} and {other_amount.currency}")
                

        
#     def __iadd__(self, other):
#         self.amount = self.__add__(other)
#         return self
    

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + 5)
# print(c1 + c2)
# print(c1)
# c1 += 5
# print(c1)
# c1 += c2
# print(c1)
# try: 
#     print(c1 + c3)
# except Exception as a:
#     print(a)


# Exercise 3: String Module

# import string
# import random
# letter_list = list(string.ascii_letters)
# result = ""
# for i in range(5):
#     result += random.choice(letter_list)
# print(result)

# Exercise 4 : Current Date

# from datetime import date
# today = date.today()
# form_date = today.strftime("%d-%m-%Y")
# print(f"Today's date :{form_date}")


# Exercise 5 : Amount Of Time Left Until January 1st

# import datetime
# today = datetime.date.today()
# futdate = datetime.date(2025, 1, 1)
# now = datetime.datetime.now()
# mnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
# seconds = (mnight - now).seconds
# days = (futdate - today).days
# hms = str(datetime.timedelta(seconds=seconds))

# print (f"%d days %s" % (days, hms)," until January 1st")


# Exercise 6. Birthday And Minutes

# import datetime
# from datetime import datetime
# import datetime as date1
# today = date1.date.today()

# date_str = input("Please enter you date in YYYY-DD-MM: ")
# date_format = '%Y-%m-%d'
# bday = datetime.strptime(date_str, date_format)
# bday = bday.date()
# print(bday)
# now = date1.datetime.now()
# mnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
# seconds = (mnight - now).seconds
# minutes_today = seconds // 60
# mitules_before_today = (today - bday).days * 1440
# total_minutes = minutes_today + mitules_before_today
# print(f"You have lived {total_minutes} minutes in your live")


# Exercise 7 : Faker Module
from faker import Faker
fake = Faker()
users = []
for i in range(5):
    current_user = {}
    current_user["name"] = fake.name()
    current_user["address"] = fake.address()
    current_user["langage_code"] = fake.language_code()
    users.append(current_user)
for i in range(len(users)):
    print(users[i])
