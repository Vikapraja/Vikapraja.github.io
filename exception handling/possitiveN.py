try:
    for i in range(1):
     a=int(input("Enter any +ve number="))
     assert a>0,"Enter any +ve value"
except AssertionError:
    print("plz Enter any +ve value")
except ValueError:
    print("Enter a vailid Value")
except TypeError:
    print("ok")
except NameError:
    print("Enter vailid value")
finally: print(a)
p=a
try:
   while p<0:
       p=int(input("Enter b value for b="))
       if p>0:
          print("it's a possitive number!")
       else:
          print("Enter any +ve number=")
except ValueError:
    print("Enter any +ve number")
