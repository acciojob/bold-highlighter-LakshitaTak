let boldText = []

function getBoldText() {
  let paragraph = document.getElementById("para")
  boldText = paragraph.getElementsByTagName("strong")

}
getBoldText()

function highlight() {
  //Write your code here
  for (let index = 0; index < boldText.length; index++) {
    boldText[index].style.color = "green"
  }
  console.log(boldText)

  console.log("change color")

}


function return_normal() {

  for (let index = 0; index < boldText.length; index++) {
    boldText[index].style.color = "black"
    //Write your code here

  }
  console.log("back to normal")
}
