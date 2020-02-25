def additions_in_list(lis, k):
    for l in lis:
        for j in lis[1:]:
            print('l', l, j, l+j )
            if l+j == k:
                return True     
    return False    



print(additions_in_list([1,2,3,4,5], 10))
print(additions_in_list([10, 15, 3, 7], 17))

def additions_in_list1(lis, k):
    index = 0
    for i in lis:
        for j in lis[index+1:]:
            print('i', i, j, i+j)
            if i+j == k:
                return True
        index += 1
    return False

print(additions_in_list1([1,2,3,4,5], 10))
print(additions_in_list1([10, 15, 3, 7], 17))

def two_pairs(lis, k):
    if not len(lis):
        return False
    
    a = {}
    for i in lis:
        if not a.get(i):
            a[i] = []
        if len(a.get(k-i, [])):
            return True
        a[i].append(k-i)
        
    return False

two_pairs([1,2,3,4,5], 10)
two_pairs([10, 15, 3, 7], 17)
print(two_pairs([1,2,3,4,5], 10))
print(two_pairs([10, 15, 3, 7], 17))

from collections import defaultdict
def two_pairs1(lis, k):
    if not len(lis):
        return False
    a = defaultdict(list)
    for i in lis:
        if len(a[k-i]):
            return True
        a[i].append(k-i)
    return False

print(two_pairs1([], 5))
print(two_pairs1([1,2,3,4,5], 10))
print(two_pairs1([10, 15, 3, 7], 17))
print(two_pairs1([1,2,4,5,6,5,-1], 0))
print(two_pairs1([1,2,1,1,2,3,2,3,1], 2))