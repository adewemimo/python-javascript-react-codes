class Course:   # Seun     
    
  def __init__(self, course_code, name):
    self.course_code = course_code
    self.name = name
    self.lecturers = []
    
  def assign_lecturer(self, lecturer):
    self.lecturers.append(lecturer)
    
  def view_lecturers(self):
    return self.lecturers
    
csc = Course('CSC101', 'Computer Science Introduction')
pol = Course('POL101', 'Political Science Introduction')
print(csc.name) 
print(csc.course_code)
print(pol.course_code)
csc.assign_lecturer('Professor Soyinka')
csc.assign_lecturer('Professor Achebe')
print(csc.view_lecturers())
#
pol.assign_lecturer('Professor Soyinka')
print(pol.view_lecturers())