import matplotlib.pyplot as plt
import numpy as np

x=np.linspace(0,2*np.pi,100)

y=np.cos(x)


# ax=plt.plot(x,y,color='green')
# ax=plt.subplots(3,3)
# ax=plt.grid()
plt.grid()
plt.scatter(x,y)
#
# x=[3,5,7,8]
# plt.pie(x)
#
#
# plt.plot(x,y)
plt.show()
