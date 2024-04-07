import matplotlib as plt
import numpy as np

# plt.style.use("_mpl-gallery")
x=0.5+np.arange(8)
y=[1,2,3,4,5,6,7,8]
fig,ax =plt.subplots()
ax.bar(x,y,width=1, edgecolor="white", linewidth=0.7)
ax.set(xlim=(0,8),xticks=np.arange(1,8),
       ylim=(0,8),yticks=np.arange(1,8))
plt.show()
