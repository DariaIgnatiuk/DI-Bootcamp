class BankAccount:
    def __init__(self, username, password, balance, authenticated = False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def deposit(self, amount):
        if self.authenticated:
            if amount > 0:
                self.balance += amount
            else:
                raise Exception("You can't deposit negative amount")
        else:
                raise Exception("You are not authenticated")
    
    def withdraw(self, amount):
        if self.authenticated:    
            if amount > 0:
                self.balance -= amount
            else:
                raise Exception("You can't withdraw negative amount")
        else:
            raise Exception("You are not authenticated")
        
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        

class MinimumBalanceAccount(BankAccount):

    def __init__(self,username, password, balance, authenticated = False, minimum_balance = 0):
        super().__init__(username, password, balance, authenticated)
        self.minimum_balance = minimum_balance
    
    def withdraw(self, amount):
        if self.authenticated:      
            result = self.balance - amount
            if result > self.minimum_balance:
                self.balance -= amount
            else:
                raise Exception(f"You can't withdraw {amount}, because then your balance will be lower than minimum")
        else:
            raise Exception("You are not authenticated")    
            
account = MinimumBalanceAccount('dasha', '123', 100)
account.authenticate('dasha', '123')
try:
    account.deposit(-10)
    print(account.balance)
except Exception as e:
    print(e)