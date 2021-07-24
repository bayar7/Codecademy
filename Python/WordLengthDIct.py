def word_length_dictionary(words):
  bible = {}
  for word in words:
      bible[word] = len(word)
  return bible


print(word_length_dictionary(["apple", "dog", "cat"]))
# should print {"apple":5, "dog": 3, "cat":3}
print(word_length_dictionary(["a", ""]))