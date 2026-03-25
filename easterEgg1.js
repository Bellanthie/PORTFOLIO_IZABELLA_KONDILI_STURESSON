// FIRST HIDDEN EGG

const btnClick = document.getElementById("hand");
const bodyElement = document.querySelector("body");
console.log(btnClick);
// Click-event
let bg = 0; /*background choice*/
let clickcount = 0;
btnClick.addEventListener("click", () => {
  console.log(bodyElement);
  clickcount++;
  if (clickcount == 1) {
    // 1 = klicka EN ENDA JÄVLA GNG -- changeable
    bg++;
    if (bg == 0) {
      bodyElement.className = "bg1";
      //change background picture to ....
      console.log(bg);
    }
    if (bg == 1) {
      //change background picture to ....
      bodyElement.className = "bg2";

      console.log(bg);
    }
    if (bg == 2) {
      //change background picture to ....
      bodyElement.className = "bg3";
      console.log(bg);
    }
    if (bg == 3) {
      bodyElement.className = "bg1";

      // 0 ställ bg
      bg = 0;
      console.log(bg);
    }
    clickcount = 0;
  }
  // console.log(clickcount)
});

// second easterEgg
let code = "";
document.addEventListener("keydown", function (event) {
  code += event.key;
});

// JSON - GENERERA CV
