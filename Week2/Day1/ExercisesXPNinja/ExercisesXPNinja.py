# Exercise 1 : Call History

class Phone:

    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone, who_called):
        self.call_history.append([other_phone.phone_number, who_called])
        if who_called == "incoming":
            print(f"{other_phone.phone_number} called {self.phone_number}.")
        else:
            print(f"{self.phone_number} called {other_phone.phone_number}.")

    def show_call_history(self):
        print(f"This is {self.phone_number}'s phone hispory:")
        for item in self.call_history:
            print(f"{item[1]}, {item[0]}")

    def send_message(self, other_number, content, from_who):
        self.messages.append({"to":other_number.phone_number, "from": self.phone_number, "content": content, "from_who":from_who})

    def show_outgoing_messages(self):
        print("All outgoing messages:")
        for message in self.messages:
            if message["from_who"] == 'outgoing':
                print(message)
    
    def show_incoming_messages(self):
        print("All incoming messages:")
        for message in self.messages:
            if message["from_who"] == 'incoming':
                print(message)        

    def show_messages_from(self, other_phone):
        print(f"All messages from {other_phone.phone_number}:")
        for message in self.messages:
            if message["to"] == other_phone.phone_number:
                print(message)             

phone1 = Phone(111)
phone2 = Phone(222)
phone3 = Phone(333)
phone1.call(phone2, "outgoing")
phone1.call(phone3, "incoming")
phone1.show_call_history()
phone1.send_message(phone2, "Hii", "outgoing")
phone1.send_message(phone3, "Shalom", "incoming")
phone1.show_incoming_messages()
phone1.show_outgoing_messages()
phone1.show_messages_from(phone2)
