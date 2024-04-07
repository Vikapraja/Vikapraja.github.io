f=open("C:\\Users\\Hp\\Desktop\\file_h\\viveka4.txt",'a')
f.write("7080508087,\n")
f.seek(0)
data=f.read()
po=f.tell()
print(data,po)


#  a mode for write only and not read() and  it add data at end of file pointer position are at the end
# a+ mode is for write and read and it add data at end of file pointer position are at the end
