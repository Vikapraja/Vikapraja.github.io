f=open(r"C:\Users\Hp\Desktop\file_h\viveka7.txt",'a+')
f.write('Today is Tuesday\n')
f.seek(0)
data=f.read()
po=f.tell()
print(data,'\n',po)
# in a+ mode reading and writing both are allowed. it not erase all previous data but store. it's pointer position are at the end
