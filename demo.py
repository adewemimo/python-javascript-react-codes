from maths.calc import (
    addition,
    subtraction,
    square_root,
    multiplication,
    division,
    exponential
)

from maths.area import (
    area_triangle1,
    area_circle2,
    area_rectangle,
    area_square
)

print ("addition" , addition(3,2))
print ("substraction", subtraction(3,2))
print ("square root", square_root(4))
print ("Multiplication" , multiplication(3,2))
print ("division", division(3,2))
print ("Exponential", exponential(3,2))

print ('AREAS')
print('Triangle1', area_triangle1(2, 4))  # 4
print('Circle2', area_circle2(4))  #50.272
print('Rectangle', area_rectangle(2, 4)) # 8
print('Square', area_square(4))  # 16