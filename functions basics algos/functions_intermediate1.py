# x = [ [5,2,3], [10,8,9] ] 
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0]=15
# print(x)

# students[0]['last_name']="Bryant"
# print(students)

# sports_directory ['soccer'] [0]= "Andres"
# print(sports_directory)

# z [0]['y']=30
# print(z)

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# Change the last_name of the first student from 'Jordan' to 'Bryant'
# In the sports_directory, change 'Messi' to 'Andres'
# Change the value 20 in z to 30

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# def iterate_dictionary(students):
#     for i in range(0, len(students)):
#         output = ""
#         for key,val in students[i].items():
#             output += f" {key} - {val},"
#         print(output)
# iterate_dictionary(students)    
def iterate_dictionary(students):
    for key in range(len(students)):
        print(f"first_name - {students[key]['first_name']} last_name - {students[key]['last_name']}")
            
iterate_dictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# Create a function iterateDictionary(some_list) that, given a list of dictionaries, 
# the function loops through each dictionary in the list and prints each key and the associated value. 
# For example, given the following list:
# students = [
#          {'first_name':  'Michael', 'last_name' : 'Jordan'},
#          {'first_name' : 'John', 'last_name' : 'Rosales'},
#          {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#          {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# def iterateDictionary2(key_name, students):
#     for value in range(len(students)):
#         print(students[value][key_name])

# iterateDictionary2('first_name', students)
# iterateDictionary2('last_name', students)
# Michael
# John
# Mark
# KB




# Create a function iterateDictionary2(key_name, some_list) 
# that, given a list of dictionaries and a key name, the function prints the value stored 
# in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:

# dojo = {
#    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# def printInfo(dojo):
#     for key in dojo:
#         print(len(dojo[key]))
#         for value in range(len(dojo[key])):
#             print(dojo[key][value])
# printInfo(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon

