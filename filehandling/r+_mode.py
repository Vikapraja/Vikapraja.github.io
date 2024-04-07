f=open(r"C:\Users\Hp\Desktop\file_h\viveka5.txt",'r+')
f.write("Good morning viveka!")
f.seek(0)
data=f.read()
po=f.tell()
print(data,'\n',po)

# in r+ mode reading and writing both allowed.it erase previous data, it will overarise existing data.Pointer position are at the end
