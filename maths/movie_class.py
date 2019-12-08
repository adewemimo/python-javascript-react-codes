class movie:
    
    # attribute of the class
    type_of_movie = 'Christian Movie'
    
    # initializer / initial attributes of the movie instance 
    def __init__(self, name, year_produced):
        self.name = name
        self.year_produced = year_produced
        
    def age_category(self, category):
        return  '{} movie is for {}'.format(self.name , category)
    
class christmas(movie):
    
    # attribute of child class
    type_of_movie = 'Christmas Movie'
    
    def movie_producer(self, producer):
        return '{} was produced by {}'. format(self.name, producer)
    
    
movie1 = movie('God is Real' , 2019)
print(movie1.type_of_movie)
print(movie1.name)
print(movie1.year_produced)

print(movie1.age_category('Adult'))

movie2 = christmas('Christmas birthday', 2020)
print(movie2.type_of_movie)
print(movie2.name)
print(movie2.year_produced)

print(movie2.movie_producer('Seun Soetan'))

