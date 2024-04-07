import pickle
file=open(r"C:\Users\Hp\Desktop\file_h\viveka9.txt",'wb')
pickle.dump("date= 26mar,2002",file)
# data=pickle.load(file)
po=file.tell()
print(po)

# wb mode is for only dump binary file by pickle module.
# it can't read(load) file.
# it erase previous data.
# pointer position are at the end .
# for reading (unpickle (load) to  binary file needs to open in rd

file=open(r"C:\Users\Hp\Desktop\file_h\viveka9.txt",'rb')
data=pickle.load(file)
po=file.tell()
print("____________At load by rb mode ______________\n",po,'\n',data)
