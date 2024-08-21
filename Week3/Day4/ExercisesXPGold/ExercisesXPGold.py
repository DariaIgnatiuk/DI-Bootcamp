import hashlib
import psycopg2
from dotenv import load_dotenv
import os

# DB connection
load_dotenv()
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

connetion = psycopg2.connect(database = DB_NAME,
                             user = DB_USER,
                             password = DB_PASSWORD,
                             host = DB_HOST,
                             port = DB_PORT)

cursor = connetion.cursor()

def add_new_user(username, password):
    password_hash = hashlib.sha3_224()
    password_hash.update(str(password).encode())
    query = f'''INSERT INTO users
    (username, password) 
    VALUES ('{username}', '{password_hash.hexdigest()}')'''
    cursor.execute(query)
    connetion.commit()

def check_user(username, password):
    password_hash = hashlib.sha3_224()
    password_hash.update(str(password).encode())
    query = f'''SELECT * FROM users
    WHERE username = '{username}' AND password = '{password_hash.hexdigest()}';'''
    result = cursor.execute(query)
    connetion.commit()
    print(result)  
    if result is None:
        return False
    else:
        return True      

def find_user_by_username(username):
    query = f'''SELECT * FROM users
    WHERE username = '{username}';'''
    cursor.execute(query)
    connetion.commit()  
    if len(query) == 0:
        return False
    else:
        return True 

#logging in
action = ''
while action != 'exit' and action !='login':
    print("\nIf you want to log in, enter 'login'\nIf you want to exit, enter 'exit'")
    action = input()
    if action == 'login':
        username = input("Please enter your username: ")
        password = int(input("Please enter your password: "))
        if check_user(username, password):
            print("You are now logged in")
        else:
            print("This combination if username and password isn't correct\nWhould you like to sign up?")
            result = input("Type 'yes' or 'no': ")
            if result == 'yes':
                new_username = input("Please enter username: ")
                if not find_user_by_username(username):
                    new_password = int(input("Please enter password: "))
                    add_new_user(new_username, new_password)
                    print('You haved successfully created an account')
                else:
                    print(f"User '{new_username}' already exists.")
            else: 
                action = ''
