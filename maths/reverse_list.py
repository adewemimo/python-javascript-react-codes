def reverse_list(a):
    ''' the optimal way to achieve reversing a list by iterating through the list from 
    the beginning to the middle swapping the head with the tail'''
    i,j = 0, len(a) - 1
    
    while i <= j:
        a[i] , a[j] = a[j], a[i]
        i += 1
        j -= 1
        
    return a

b = [0, 1, 2, 3, 4, 5, 6, 7]
print(reverse_list(b))

l = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9]
l.reverse()
print(l)