def square_root(num1):
    if type(num1) != int :
        raise ValueError('Number is not an integer')
    return num1 ** (1/2)

def subtraction(num1, num2):
    if type(num1) != int and type(num2) != int :
        raise ValueError('Numbers are not integers')
    return num1 - num2

def multiplication(num1,num2):
    if type(num1) != int and type(num2) != int :
        raise ValueError('Numbers are not integers')
    return num1*num2

def exponential (num1, num2):
    if type(num1) != int and type(num2) != int :
        raise ValueError('Numbers are not integers')
    return num1 ** num2

def division(num1,num2):
    if type(num1) != int and type(num2) != int :
        raise ValueError('Numbers are not integers')
    return num1 / num2

def addition (num1,num2):
    if type(num1) != int and type(num2) != int :
        raise ValueError('Numbers are not integers')
    return num1 + num2
