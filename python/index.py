print("Hello my game, lets register to play")

name = input("Enter your name: ")
surname = input("Enter your surname: ")
password = int(input("create password: "))
repeat_password = int(input("Repeat your password: "))

if password == repeat_password:
    print("Register sucsesful: ")
else:
     print("Register wrong")
     exit()


print("If you register sucsesful congrats, lets start game.")

print("You have 10 chance")
gues = int(input("Guess number 1 to 50: "))

correct = 12
chane = gues

if gues == correct:
     print("You are correct: ")
     print("GAme is done")
     exit()
else:
     print("Try again")

if gues != correct:
    print("Try again")
    gues = int(input("Guess number 1 to 50: "))
    chane =+ 1
else:
    print("You are correct: ")
    print("GAme is done")
    exit()
    
if gues != correct:
    print("Try again")
    gues = int(input("Guess number 1 to 50: "))
    chane =+ 2
else:
    print("You are correct: ")
    print("GAme is done")
    exit()

if gues != correct:
    print("Try again")
    gues = int(input("Guess number 1 to 50: "))
    chane =+ 3
else:
    print("You are correct: ")
    print("GAme is done")
    exit()

if gues != correct:
    print("Try again")
    gues = int(input("Guess number 1 to 50: "))
    chane =+ 4
else:
    print("You are correct: ")
    print("GAme is done")
    exit()

if gues != correct:
    gues = int(input("Guess number 1 to 50: "))
    chane =+ 5
    print("You are loser, You try's is now 5.")
    print("Bye...", name,surname)
    exit()
    
    
    

