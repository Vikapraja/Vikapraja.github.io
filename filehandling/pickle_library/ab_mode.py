import pickle
file=open(r"C:\Users\Hp\Desktop\file_h\viveka10.txt",'ab')
pickle.dump("it's pickle library!",file)
# data=pickle.load(file)
po=file.tell()
# print(data)
print(po)

# in append mode
