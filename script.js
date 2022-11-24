let goToGarrit = document.getElementById("garrit")
let item1 = document.getElementById("cheatsheet")
let middleButton = document.getElementById("middlebutton")
let goToMartin= document.getElementById("martin")
let item2 = document.getElementById("book")
let item3 = document.getElementById("coffee")
let item4 = document.getElementById("beer")

 
goToGarrit.addEventListener("click", function(){
    item1.style.visibility= "visible";
    sessionStorage.setItem("saveItem1", "itemClick")
    })
    
    goToMartin.addEventListener("click", function(){
    item2.style.visibility= "visible";
    sessionStorage.setItem("saveItem2", "itemClick")
    })
    
    if(sessionStorage.getItem("saveItem1") != null){
        item1.style.visibility= "visible"
    }
    
    if(sessionStorage.getItem("saveItem2") != null){
        item2.style.visibility= "visible"
    }

function startAgain() {

    sessionStorage.removeItem("saveItem1", "itemClick")
    sessionStorage.removeItem("saveItem2", "itemClick")
    }
 
