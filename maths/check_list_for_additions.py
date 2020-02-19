def additions_in_list(lis, k):
    a,b =1, len(lis)-1
    for l in lis:
        while a <= b:
            if l + lis[a] == k:
                return True
            else:
                return None
            a += 1
        
    return        



additions_in_list([1,2,3,4,5], 10)
additions_in_list([10, 15, 3, 7], 17)