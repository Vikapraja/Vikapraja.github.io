
class Fun{
    regular(){
        console.log(`In regular() of Fun(class)`)
    }

    annonimous = function(){
        console.log(`In annimous() of Fun(class)`)
    }

    fatArrow= ()=> console.log(`In fatArrow() of Fun(class)`) 
}

var obj = new Fun()

obj.regular()
obj.annonimous()
obj.fatArrow()