# without mode, opened files are in read mode (r)
f=open("C:\\Users\\Hp\\Desktop\\file_h\\viveka2.txt",'r')
data=f.read()
po=f.tell()
print(data,"\n", po)
