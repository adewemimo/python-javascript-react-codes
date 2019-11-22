def addition1 (*numbers):
    if len(numbers) == 1:
        return numbers
    else :
        sums = numbers[0]
        for n in numbers[1:] :
            sums = sums + n
    return sums
        
        
def substraction1 (*numbers) :
    if len(numbers) == 1:
        return numbers
    else :
        substracts = numbers[0]
        for n in numbers[1:] :
            substracts = substracts - n
    return substracts
        
def multiplication1 (*numbers) :
    if len(numbers) == 1 :
        return numbers
    else :
        multiple = numbers[0]
        for n in numbers[1:] :
            multiple = multiple * n
    return multiple



