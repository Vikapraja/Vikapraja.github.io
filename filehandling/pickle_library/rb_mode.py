import pickle
file=open(r"C:\Users\Hp\Desktop\file_h\viveka8.txt",'rb')
# pickle.dump("it's first binary file by viveka",file)
data=pickle.load(file)
po=file.tell()
print(data,'\n',po)

# rb mode for read the binary file only by pickle module .
# pickling has  pickle and unpickle work.
# pickle=> by dump() function for write in binary file
# unpickle=> by load() function for read the binary file.
