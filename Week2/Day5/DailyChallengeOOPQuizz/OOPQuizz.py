# Part 2: Create A Deck Of Cards Class.

import random

class Card:

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:

    def __init__(self):
        deck = []
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        for suit in suits:
            for value in values:
                card = Card(suit, value)
                deck.append(card)
        self.deck = deck

    def shuffle(self):
        random.shuffle(self.deck)

    def deal(self):
        random_card = random.choice(self.deck)
        self.deck.remove(random_card)
        return random_card
    
    def __repr__(self) -> str:
        result = ""
        for card in self.deck:
            result += f"\n{card.value}, {card.suit}"
        return result

deck = Deck()
random_card = deck.deal()
print(f"You dealt {random_card.value} {random_card.suit}")
deck.shuffle()
print(deck)