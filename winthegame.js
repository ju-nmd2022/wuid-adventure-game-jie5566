   // the following code learned from https://www.youtube.com/watch?v=c5SIG7Ie0dM&t=465s

   const colors = ["rgb(93, 141, 179)", "rgb(987, 143, 79)",
   "rgb(246, 158, 202)", "rgb(199, 134, 78)", "rgb(130, 78, 199)",
   "rgb(145, 129, 132)","rgb(209, 207, 75)"];
  const changecolor = document.getElementById("button")
  
  changecolor.addEventListener("click", function(){
  
      const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors[randomNumber];
      })
  function getRandomNumber() {
      return Math.floor(Math.random() * colors.length)
  }
  
  function startAgain() {

    sessionStorage.removeItem("saveItem1", "itemClick")
    sessionStorage.removeItem("saveItem2", "itemClick")
    }
 