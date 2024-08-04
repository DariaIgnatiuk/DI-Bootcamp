'''
Exercise 9 : Tall Enough To Ride A Roller Coaster
Write code that will ask the user for their height in centimeters.
If they are over 145cm print a message that states they are tall enough to ride.
If they are not tall enough print a message that says they need to grow some more to ride.
'''

height = input("How tall are you? ")
height = int(height)
if height > 145:
    print("You are tall enough to ride!")
else:
    print(f"You still need to grow a little! {145 - height} sm to go!")