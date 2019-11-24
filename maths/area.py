from math import pi
from maths.calc import exponential, multiplication, division

def area_circle2(radius):
    if type(radius) != int :
        raise ValueError('Radius provided is not integer')
    return pi * exponential(radius, 2) 
    
def area_rectangle(lenght, breath):
    if type(lenght) != int and type(breath) != int :
        raise ValueError('Lenght and Breadth provided are not integers')
    return multiplication(lenght, breath)
    
def area_square(length1):
    if type(length1) != int :
        raise ValueError('Lenght provided is not integer')
    return exponential(length1, 2)

def area_triangle1(base, height):
    if type(base) != int and type(height) != int :
        raise ValueError('Base and Height are not integers')
    return  0.5 * multiplication(base, height)
