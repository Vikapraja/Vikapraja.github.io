try:
    a=int(input("Enter the possitive  Number a="))
except ValueError:
    print("plz enter the int value")

if a>0:print(a,"is possitive number")
else:print("plz enter any +ve number")

try :
    a/0
except NameError:
    print("any number or str is not dividable by Zero  ")
except ZeroDivisionError:
    print("a is not divideable by zero ")


# finally:print(a)
