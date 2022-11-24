let item1 = document.getElementById("cheatsheet")
let item2 = document.getElementById("book")
let item3 = document.getElementById("coffee")
let item4 = document.getElementById("beer")
let chooseCoffee = document.getElementById("chooseCoffee")
let chooseBeer = document.getElementById("chooseBeer")
let buttonCoffee = document.getElementById("btncoffee")
let buttonBeer = document.getElementById("btnbeer")



chooseCoffee.addEventListener("click", function(){
    item3.style.visibility= "visible"
    buttonCoffee.style.visibility= "visible"
    sessionStorage.setItem("saveItem3", "itemClick")
     })
    
     chooseBeer.addEventListener("click", function(){
    item4.style.visibility= "visible"
    buttonBeer.style.visibility= "visible"
    sessionStorage.setItem("saveItem4", "itemClick")
    })


    if(sessionStorage.getItem("saveItem1") != null){
        item1.style.visibility= "visible"
    }
    
    if(sessionStorage.getItem("saveItem2") != null){
        item2.style.visibility= "visible"
    }
    
      if (sessionStorage.getItem("saveItem2") != null && sessionStorage.getItem("saveItem1") != null) 
      {
        middleButton.style.visibility= "visible"
    } 
    




    