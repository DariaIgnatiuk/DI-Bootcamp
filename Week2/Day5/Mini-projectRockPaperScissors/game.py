import random

class Game:

    def get_user_item(self):
        item = ""
        while not (item == 's' or item == 'r' or item == 'p'):
            item = input("\nSelect (r)ock, (p)aper or (s)cissors: ")
        return item
    
    def get_computer_item(self):
        set = ['s', 'r', 'p']
        c = random.choice(set)
        return c
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "drew"
        if user_item == 's' and computer_item == "p":
            return "won"
        if user_item == 's' and computer_item == "r":
            return "lost"
        if user_item == 'r' and computer_item == "s":
            return "won"
        if user_item == 'r' and computer_item == "p":
            return "lost"
        if user_item == 'p' and computer_item == "r":
            return "won"
        if user_item == 'p' and computer_item == "s":
            return "lost"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item,computer_item)
        if user_item == "s":
            user_item_result = "scissors"
        elif user_item == "r":
            user_item_result = "rock"
        else:
            user_item_result = "paper"
        if computer_item == "s":
            computer_item_result = "scissors"
        elif computer_item == "r":
            computer_item_result = "rock"
        else:
            computer_item_result = "paper"
        print(f"You selected {user_item_result}. The computer selected {computer_item_result}. You {result}!")
        return result
