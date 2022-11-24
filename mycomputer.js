let item1 = document.getElementById("cheatsheet")
let item2 = document.getElementById("book")
let item3 = document.getElementById("coffee")
let item4 = document.getElementById("beer")
let middleButton = document.getElementById("middlebutton")


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