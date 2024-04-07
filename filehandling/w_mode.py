f=open("C:\\Users\\Hp\\Desktop\\file_h\\viveka3.txt",'w+')
f.write("It's me okk")
f.seek(0)
data=f.read()
po=f.tell()
print(data,"\n",po)

# seek function are use for place another possition to pointer
