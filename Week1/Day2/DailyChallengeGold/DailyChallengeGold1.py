""" 
Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
Display a little cake as seen below:
    ___iiiii___
   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
The number of candles on the cake should be the last number of the users age, 
if they are 53, then add 3 candles.
Bonus : If they were born on a leap year, display two cakes ! """

from datetime import datetime
from dateutil.relativedelta import relativedelta
from calendar import isleap
birth_date_str = input('What is your date of birth? (DD.MM.YYYY)\n')
#birth_date_str = "01.01.1989"
birth_date = datetime.strptime(birth_date_str, '%d.%m.%Y')
today = datetime.now()
res = today - birth_date
rdelta = relativedelta(today, birth_date)
age = rdelta.years
age_last_digit = age % 10
if age_last_digit == 0:
    age_last_digit = 10
cake = """   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""
candles = ""
for i in range(age_last_digit):
    candles += "i"
underline_number = 10 - age_last_digit
underline = ""
for i in range(underline_number// 2):
    underline += "_"
candles_line = "    _" + underline + candles + underline
if age_last_digit % 2 != 0:
    candles_line += "_"
print(candles_line)
print(cake)
if isleap(birth_date.year):
    print(candles_line)
print(cake)

