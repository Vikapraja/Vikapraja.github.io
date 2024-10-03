//  function in object 
//  [here no need of function keyword for function creation.but for annymous function will be use]

var obj={
    a:10,
    b:"ducat",
    c:true,
    fun1(){
        console.log("In regular function of obj")
    },

    fun2:function(){
        console.log("In Anonnymous function of obj")
    },

    fun3:()=>console.log("In fat arrow function of obj")
}

console.log(obj.a,obj.b,obj.c)

obj.fun1()
obj.fun2()
obj.fun3()