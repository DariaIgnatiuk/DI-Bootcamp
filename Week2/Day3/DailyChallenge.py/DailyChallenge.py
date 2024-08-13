import math

class Circle:
    list = []

    def __init__(self, radius = 0, diameter = 0) -> None:
        if radius == 0:
            self.radius = diameter / 2
        elif diameter == 0:
            self.radius = radius
        Circle.list.append(self)

    def __repr__(self) -> str:
        return f"circle's diameter is {self.radius * 2} and radius is {self.radius}" 
    
    @property
    def area(self):
        return math.pi * self.radius * self.radius
    
    def __add__(self, other_circle):
        new_radius = self.radius + other_circle.radius
        return f"New circle's radius is {new_radius} and diameter is {new_radius * 2}"
    
    def __gt__(self,other_circle):
        if self.radius > other_circle.radius:
            return True
        else:
            return False
        
    def __eq__(self,other_circle):
        if self.radius == other_circle.radius:
            return True
        else:
            return False

circle1 = Circle(radius = 5)
circle2 = Circle(diameter = 11)
print(circle1, circle2)
print(circle1.area)
print(circle1 + circle2)
print(circle1 > circle2 )
print(circle1 == circle2)
print(Circle.list)