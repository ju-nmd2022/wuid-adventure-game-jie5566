let item1 = document.getElementById("cheatsheet")
let item2 = document.getElementById("book")
let item3 = document.getElementById("coffee")
let item4 = document.getElementById("beer")

item1.style.visibility= "visible"
item2.style.visibility= "visible"

chooseCoffee.addEventListener("click", function(){
    item3.style.visibility= "visible"
     })
    
     chooseBeer.addEventListener("click", function(){
    item4.style.visibility= "visible"
    })

    // if I choose coffee, I cannot click beer