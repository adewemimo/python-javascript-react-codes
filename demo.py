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

from maths.list_calc import (
    addition1,
    substraction1,
    multiplication1
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


print("addition of numbers" , addition1(2,3,4,5,6)) #20
print("addition of numbers" , addition1(5)) #5
print("substraction of numbers" , substraction1(40, 50, 5)) #-15
print('substraction of numbers' ,  substraction1(8)) #8
print('multiplication of numbers' , multiplication1(2,2,2,2,2)) #32
print('multiplication  of numbers' , multiplication1(2)) #2

print('Triangle1', area_triangle1('a','b'))  # 4
print ("Exponential", exponential('a','b'))



