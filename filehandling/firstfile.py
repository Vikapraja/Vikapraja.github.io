# with open("C:\\Users\\Hp\\Desktop\\file_h\\viveka.txt") as f:
#     data=f.read()
#     f.close()
#     print(data)

# without mode, opened files are in read mode (r)

# oR
f=open("C:\\Users\\Hp\\Desktop\\file_h\\viveka.txt")
data=f.read()
po=f.tell()
f.close()
print(data,po)

