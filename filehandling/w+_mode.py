f=open(r"C:\Users\Hp\Desktop\file_h\viveka6.txt",'w+')
f.write("Good morning again!")
f.seek(0)
data=f.read()
po=f.tell()
print(data,'\n',po)

# in w+ mode reading and writing both are allowed.it earse all previous data. it's pointer position are at the end.
