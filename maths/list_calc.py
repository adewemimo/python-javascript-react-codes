def addition1 (*numbers):
    if numbers is None :
        return 0
    sums = numbers[0]
    for n in numbers[1:] :
        sums = sums + n
    return sums
        
        
def substraction1 (*numbers) :
    if numbers is None:
        return 0
    substracts = numbers[0]
    for n in numbers[1:] :
        substracts = substracts - n
    return substracts
        
def multiplication1 (*numbers) :
    if numbers is None:
        return 0
    multiple = numbers[0]
    for n in numbers[1:] :
        multiple = multiple * n
    return multiple



