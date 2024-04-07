try:
    a=int(input("Enter a intereger number="))
    a>0
except ValueError :
    print("plz enter int value")
else:print(a,"it's a integer value!")

try:
  b=int(input("enter second int number="))

except ValueError:
      print("it's not a integer number")
else: print(b,"it's also int value")

try:
    b>0
    c=a/b
except ZeroDivisionError :
    print("Impossible ! any number are not devided by zero")
except NameError:
    print("so division of int and str is not possible! or str to str ")

else:print(c,"is devidion of a,b(a/b)")
finally:print("ok")
