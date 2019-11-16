from math import pi
from maths.calc import exponential, multiplication, division

def area_circle2(radius):
    return pi * exponential(radius, 2) 
    
def area_rectangle(lenght, breath):
    return multiplication(lenght, breath)
    
def area_square(length1):
    return exponential(length1, 2)

def area_triangle1(base, height):
    return  0.5 * multiplication(base, height)
