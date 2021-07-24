 """ 
 1. Define the function to accept one parameter for our dictionary
 2. Create a variable to keep track of our sum
 3. Loop through every key in the dictionary
 4. Inside the loop, if the key is even, add the value from the even key
 5. After the loop, return the sum
    
 """

def sum_even_keys(my_dictionary):
  total = 0
  for key in my_dictionary.keys():
    if key % 2 == 0:
      total += my_dictionary[key]
  return total


print(sum_even_keys({1:5, 2:2, 3:3}))
# should print 2
print(sum_even_keys({10:1, 100:2, 1000:3}))
# should print 6