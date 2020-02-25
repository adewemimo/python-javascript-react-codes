def addition_twoprimes(lis, e):
    a = []
    if e > 2 and e % 2 == 0:
        for i in lis:
            if i > 1:
                for j in range(2,i):
                    if (i%j) == 0:
                        break
                    else:
                        a.append(i)
                        print(a)
    else:
        print('The sum of the numbers is not even')

    for l in a:
        for j in a[1:]:
            print('l', l, j, l+j )
            if l+j == e:
                return True     
    return False   

print(addition_twoprimes([1,2,3,4,5], 10))
print(addition_twoprimes([10, 15, 3, 7], 17))