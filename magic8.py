import random

name = "Dorian Grey"
question = "Hello?"
answer = ""

random_number = random.randint(1,13)

if random_number == 1:
  answer = "Yes - definitely"
elif random_number == 2:
  answer = "It is decidedly so"
elif random_number == 3:
  answer = "Without a doubt"
elif random_number == 4:
  answer = "Reply hazy, try again"
elif random_number == 5:
  answer = "Ask again later."
elif random_number == 6:
  answer = "Better not tell you now"
elif random_number == 7:
  answer = "My sources say no"
elif random_number == 8:
  answer = "Outlook not so good"
elif random_number == 9:
  answer = "Very doubtful"
elif random_number == 10:
  answer = "Yeah, probably"
elif random_number == 11:
  answer = "Most likely"
elif random_number == 12:
  answer = "INDEED!"
elif random_number == 13:
  answer = "Ofcourse!"
else:
  answer = "Error wrong number"

if question == "":
  print("Maybe you ask something...?")
elif name == "":
  print("Question:" + question)
  print("Magic 8-Ball's' answer: " + answer)
else:
  print(name + " asks:" + question)
  print("Magic 8-Ball's' answer: " + answer)