var a = "Ducat Educat Noida"
            var b = a.padStart(50,"-")
            var c = a.padEnd(50,"-")
            console.log(b)
            console.log(c)

            // genrating 6 digit number
            for(let i = 1;i<=10;i++){
                console.log(Number(parseInt(Math.random()*1000000).toString().padEnd(6,"0")))
            }