import psycopg2
from dotenv import load_dotenv
import os

# Exercise 1 : Restaurant Menu Manager

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


class MenuItem:

    def __init__(self, item_name, item_price) -> None:
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        query = f'''INSERT INTO menu_items
        (item_name, item_price) 
        VALUES ('{self.item_name}', '{self.item_price}')'''
        cursor.execute(query)
        connetion.commit()

    def delete(self):
        query = f'''DELETE FROM menu_items 
        WHERE item_name = '{self.item_name}' AND item_price = {self.item_price}'''
        cursor.execute(query)
        connetion.commit()

    def update(self, name, price):
        query = f'''UPDATE menu_items
        SET item_name = '{name}', item_price = '{price}'
        WHERE item_name = '{self.item_name}'AND item_price = {self.item_price}'''
        cursor.execute(query)
        connetion.commit()


class MenuManager:
    @staticmethod
    def get_by_name(name):
        query = f"SELECT * FROM menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        results = cursor.fetchall()
        connetion.commit()
        if results == []:
            return 'None'
        else:    
            return results

    @staticmethod
    def all_items():
        query = f"SELECT * FROM menu_items"
        cursor.execute(query)
        results = cursor.fetchall()
        connetion.commit()
        return results
