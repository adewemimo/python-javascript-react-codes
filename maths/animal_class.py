class Animal:
    def __init__(self):
        super().__init__()
        
    def num_legs(self):
        return 4
    
    def talk(self):
        return ''
    
    def color(self):
        return 'White'


class Unicorn(Animal):
  def talk(self):
    return 'neigh'


U = Unicorn()  # initialization
print(U.num_legs()) # 4
print(U.talk())  # 'neigh'
print(U.color()) # White