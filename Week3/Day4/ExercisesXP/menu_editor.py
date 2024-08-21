from ExercisesXP import MenuItem
from ExercisesXP import MenuManager

def show_user_menu():
    action = ''
    while action != 'X':
        print('''
What would you like to do?\n 
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
Exit (X)''')
        action = input(": ")
        if action == 'A':
            add_item_to_menu()
        elif action == 'D':
            remove_item_from_menu()
        elif action == 'U':
            update_item_from_menu()
        elif action == 'S':
            show_restaurant_menu()
        elif action == 'V':
            view_item()
        elif action == 'X':
            show_restaurant_menu()

def add_item_to_menu():
    name = input('Enter the name of the item: ')
    price = int(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()
    print(f"{name} was added successfully!")

def remove_item_from_menu():
    name = input('Enter the name of the item you want to remove: ')
    items = MenuManager()
    item_to_delete = items.get_by_name(name)
    if item_to_delete == []:
        print(f"There is no {name} in the menu")
    else:
        object = MenuItem(item_to_delete[0][1], item_to_delete[0][2])
        object.delete()
        print(f"{name} was deleted successfully")

def update_item_from_menu():
    name = input('Enter the name of the item you want to update: ')
    price = int(input("Enter the price of the item you want to update: "))
    item = MenuItem(name, price)
    updated_name = input('Enter the new name of the item: ')
    updated_price = int(input("Enter the new price of the item: "))
    item.update(updated_name, updated_price)
    print(f"{updated_name} was deleted updated")

def show_restaurant_menu():
    print("Menu:")
    menu = MenuManager()
    list_of_items = menu.all_items()
    for item in list_of_items:
        print(f"{item[1]} costs {item[2]}")

def view_item():
    name = input('Enter the name of the item you want to view: ')
    item = MenuManager()
    item_to_view = item.get_by_name(name)
    if item_to_view == []:
        print(f"There is no {name} in the menu")
    else:
        print(f"{item_to_view[0][1]} costs {item_to_view[0][2]}")


show_user_menu()
