// let toptext = "text!"
// let topTextContainer = document.getElementById("dialogue")
// topTextContainer.innerText = toptext

// // function changeImage(a) {
// //     document.getElementById("imagemiddle").src=a;
// // }

// function changeImage() {
//     var image = document.getElementById('imagemiddle');
//     if (image.src.match("colorbottel")) {
//         image.src = "waterbottel.gif";
//     }
//     else {
//         image.src = "colorbottel.gif";
//     }
// }

// // items section, show or not show cited: https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript
// function setImageVisible(book, visible) {
//     var img = document.getElementById(book);
//     img.style.visibility = (visible ? 'visible' : 'hidden');
//     <><a href="javascript:setImageVisible('myImageId', true)">show image</a><a href="javascript:setImageVisible('myImageId', false)">hide image</a></>
// }

//  function changeMiddleImage() {
//   var middleImage = document.getElementById("imagemiddle");
//     document.getElementById("leftclick").click();
//   }

// let funcArr = [
//   function() {
//       alert('I am function 1!');
//   },
  
//   function() {
//       alert('I am function 2!');
//   },
  
//   function() {
//       alert('I am function 3!');
//   },
  
//   function() {
//       alert('I am function 4!');
//   },
  
//   function() {
//       alert('I am function 5!');
//   }
// ];

// let i = 0;

// window.onload = function() {
//   let btn = document.getElementsByTagName('button')[0];
//   btn.onclick = function() {
//       funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
//   }
// }


  let doAssignment = document.getElementById("option1")
  let middleImage = document.getElementById("imagemiddle");
  let leftImage = document.getElementById("left");
  let rightImage = document.getElementById("right");
  let option2 = document.getElementById("option2")
  let item1 = document.getElementById("cheatsheet")
  let middleButton = document.getElementById("buttonmiddle")

// 2nd page, students cry and two options: go to Garrit or Martin




function functionLeft() {
 
  middleImage.src = "cry.png";

  let dialogueText = "This is so hard, I don't know how to code.";
  let dialogueTextContainer = document.getElementById("dialogue");
  dialogueTextContainer.innerText = dialogueText;

  let option1Text = "Go to Garrit";
  let option1Textcontainer = document.getElementById("option1");
  option1Textcontainer.innerText = option1Text;

  let option2Text = "Go to Martin";
  let option2Textcontainer = document.getElementById("option2");
  option2Textcontainer.innerText = option2Text;

}

  doAssignment.addEventListener("click", functionLeft)




  // 3rd page, when you clicked go to Garrit, this page is finished, but cannot let two functions happen on one button

  // let goToGarrit = document.getElementById("option1")

  // goToGarrit.addEventListener("click", function(){
  //   middleImage.src = "begin.png"
  //       leftImage.style.visibility = "visible"

  //   let dialogueText = "Garrit smiled, he gave you a cheatsheet."
  //   let dialogueTextContainer = document.getElementById("dialogue")
  //   dialogueTextContainer.innerText= dialogueText

  //   buttonmiddle.style.visibility = "visible"
  //   let middleText = "Back to my computer"
  //   let option1Textcontainer = document.getElementById("buttonmiddle")
  //   option1Textcontainer.innerText = middleText

  //   option1.style.visibility = "hidden"
  //   option2.style.visibility = "hidden"
  //   item1.style.visibility = "visible"

  // })


// 4th page, when you click back to my computer, you will find the webpage needs grid

  // let backToMyDesk= document.getElementById("middleButton")

  // goToGarrit.addEventListener("click", function(){
  //   middleImage.src = "coding.png"

  //   let dialogueText = "Oh, no, the website is not good looking, you need grid."
  //   let dialogueTextContainer = document.getElementById("dialogue")
  //   dialogueTextContainer.innerText= dialogueText


  //   let option1Text = "Go to Garrit"
  //   let option1Textcontainer = document.getElementById("option1")
  //   option1Textcontainer.innerText = option1Text

  //   let option2Text = "Go to Martin"
  //   let option2Textcontainer = document.getElementById("option2")
  //   option2Textcontainer.innerText = option2Text

  //   option1.style.visibility = "visible"
  //   option2.style.visibility = "visible"
  //   item1.style.visibility = "visible"

  // })

  // 5th page, it is Martins page

  // goToMartin.addEventListener("click", function(){
  //   middleImage.src = "needgrid.png"
  //       leftImage.style.visibility = "visible"

  //   let dialogueText = "Martin smiled, he gave you a styling book."
  //   let dialogueTextContainer = document.getElementById("dialogue")
  //   dialogueTextContainer.innerText= dialogueText

  //   buttonmiddle.style.visibility = "visible"
  //   let middleText = "Back to my computer"
  //   let option1Textcontainer = document.getElementById("buttonmiddle")
  //   option1Textcontainer.innerText = middleText

  //   option1.style.visibility = "hidden"
  //   option2.style.visibility = "hidden"
  //   item1.style.visibility = "visible"
  //   item2.style.visibility = "visible"
  // })


  // I am going to use if else


  