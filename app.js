let date = new Date();
let year = date.getFullYear();
let header = document.createElement("div");
header.innerHTML = "Paper Rock Scissor";
header.style.cssText =
  "width: 100%;padding-bottom: 20px;height: 70px;font-size: 3em;font-family: fantasy;display: flex;justify-content: center;color: #e3cde9;padding-top:10px; ";

//score
let index = 0;

let storage = () => {
  localStorage.setItem("bestScore", index);
  let r = localStorage.getItem("bestScore");
  return r;
};

let score = document.createElement("div");
score.innerHTML = `Your Score is : ${index}`;
//
let bestScoreDiv = document.createElement("div");
bestScoreDiv.innerHTML = `best score is :${localStorage.getItem("bestScore") !==
null
  ? localStorage.getItem("bestScore")
  : storage()}`;
//
let scoreDiv = document.createElement("div");
scoreDiv.append(score);
scoreDiv.append(bestScoreDiv);

//score  style
score.style.cssText =
  "width: 300px;height: 50px;display: flex;justify-content: center;flex-wrap: wrap;align-content: center;background-color: antiquewhite;border-radius: 30px;margin: 30px auto 30px;font-family: cursive;font-size: 23px;";
bestScoreDiv.style.cssText =
  "width: 300px;height: 50px;display: flex;justify-content: center;flex-wrap: wrap;align-content: center;background-color: antiquewhite;border-radius: 30px;margin: 30px auto 30px;font-family: cursive;font-size: 23px;";
scoreDiv.style.cssText =
  "width : 100%;display: flex;justify-content: center;flex-wrap: wrap;align-content: center ";

//
//
let avabileChoose = ["rock", "paper", "scissor"];

// user images
let userImg1 = document.createElement("img");
userImg1.src = "rock.png";
userImg1.setAttribute("type", "rock");
userImg1.style.display = "inline-block";
userImg1.classList.add("active");
//
let userImg2 = document.createElement("img");
userImg2.src = "hand-.png";
userImg2.setAttribute("type", "paper");
userImg2.style.display = "none";
//
let userImg3 = document.createElement("img");
userImg3.src = "scissors.png";
userImg3.setAttribute("type", "scissor");
userImg3.style.display = "none";
// images div
let userImagesCont = document.createElement("div");
userImagesCont.append(userImg1);
userImagesCont.append(userImg2);
userImagesCont.append(userImg3);

//
let uImgarray = [userImg1, userImg2, userImg3];
//image controll
let rightbutt = document.createElement("button");
let leftbutt = document.createElement("button");

userImagesCont.prepend(leftbutt);
userImagesCont.append(rightbutt);
leftbutt.append("<");
rightbutt.append(">");
//controll function
let num = 0;
rightbutt.addEventListener("click", () => {
  if (num < 2) {
    uImgarray[num].style.display = "none";
    uImgarray[num].classList.remove("active");
    num++;
    uImgarray[num].style.display = "inline-block";
    uImgarray[num].classList.add("active");
  } else {
    uImgarray[num].style.display = "none";
    uImgarray[num].classList.remove("active");
    num = 0;
    uImgarray[num].style.display = "inline-block";
    uImgarray[num].classList.add("active");
  }
});

leftbutt.addEventListener("click", () => {
  if (num < 1) {
    uImgarray[num].style.display = "none";
    uImgarray[num].classList.remove("active");
    num = 2;

    uImgarray[num].style.display = "inline-block";
    uImgarray[num].classList.add("active");
  } else {
    uImgarray[num].style.display = "none";
    uImgarray[num].classList.remove("active");
    num--;

    uImgarray[num].style.display = "inline-block";
    uImgarray[num].classList.add("active");
  }
});
//buttons style
leftbutt.style.cssText =
  "align-self: center;height: 50px;border-radius: 50px;background-color: snow;";
rightbutt.style.cssText =
  "align-self: center;height: 50px;border-radius: 50px;background-color: snow;";
//
let imagesContainer = document.createElement("div");
imagesContainer.append(leftbutt);
imagesContainer.append(userImagesCont);
imagesContainer.append(rightbutt);

imagesContainer.style.cssText =
  "display: flex;min-width: 30%;justify-content: center;flex-wrap: nowrap;width: 300px;";
//images function
window.onload = function() {
  for (let i = 0; i < document.images.length; i++) {
    document.images[i].width = "200";
    document.images[i].height = "200";
  }
};
//

//
//seperator
let sep = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerHTML = `VS`;
sep.appendChild(h1);
document.body.appendChild(sep);
//sep style
h1.style.cssText =
  "display: flex;place-content: center;background-color: rgb(255 206 140);width: 50%;height: 50px;flex-wrap: wrap;border-radius: 10px;font-family: monospace;color: white;height: 40%;font-size:70px";
sep.style.cssText =
  "display: flex;min-width: 300px;height: 200px;justify-content: center;  width: 30%;align-content:center;flex-wrap:wrap";
//computer images
let cRockImg = document.createElement("img");
cRockImg.src = "rock.png";
cRockImg.style.display = "inline-block";
//
let cPaperImg = document.createElement("img");
cPaperImg.src = "hand-.png";
cPaperImg.style.display = "none";
//
let cScissorImg = document.createElement("img");
cScissorImg.src = "scissors.png";
cScissorImg.style.display = "none";
//
let computerImgArray = [cRockImg, cPaperImg, cScissorImg];
//
let cImgCont = document.createElement("div");

cImgCont.append(cRockImg);
cImgCont.append(cPaperImg);
cImgCont.append(cScissorImg);
//comp images cont style
cImgCont.style.cssText =
  "display: flex;justify-content: space-evenly;flex-wrap: wrap;width: 30%;min-width: 300px;";
//comp functions
//
//all
let allCont = document.createElement("div");
allCont.appendChild(imagesContainer);
allCont.appendChild(sep);
allCont.appendChild(cImgCont);

allCont.style.cssText =
  "display: flex;justify-content: center;flex-wrap: wrap;margin:0px;";
// button make
let buttondiv = document.createElement("div");
let button = document.createElement("button");
let buttonText = document.createTextNode("Let's Try !!");
button.append(buttonText);
buttondiv.appendChild(button);

button.style.cssText =
  "width: 25%;    min-width: 250px;height: 35px;background-color: white;justify-content: center;align-content:center;flex-wrap:wrap;display:flex";
buttondiv.style.cssText =
  "display: flex;justify-content: center;flex-wrap: wrap;width: 100%;align-content: center;flex-direction: column;margin-top:50px";

//

let main = document.createElement("div");
main.prepend(scoreDiv);
main.prepend(header);
main.append(allCont);
main.append(buttondiv);

document.body.prepend(main);

main.style.cssText =
  "height: 100%;width: 100%;margin: 0;background-image: linear-gradient(rgb(38, 0, 110) 75%, rgb(209, 107, 165) 85%, rgb(199, 119, 185) 90%, white);box-sizing: content-box;";

document.body.style.cssText = "overflow-x: clip;margin:0";
//let extintion div

let alterE = document.createElement("div");
alterE.style.cssText = "width: 100%;height: 106px;;display:none";
main.appendChild(alterE);
//
//footer style
let footer = document.createElement("footer");
let span1 = document.createElement("span");
span1.innerHTML = "Maked with JS only";
let span2 = document.createElement("span");
span2.innerHTML = `&#169 ${year} by Ahmad Mazen Joha`;
footer.appendChild(span1);
footer.appendChild(span2);
main.appendChild(footer);
footer.style.cssText =
  "margin-top: 30px;font-size: 20px;font-family: cursive;display: flex;color: rgb(227, 205, 233);height: 165px;flex-direction: column;justify-content: flex-start;align-items: center;";
// main function
//
//
button.addEventListener("click", () => {
  //dont repeat your self
  let scoreing = () => {
    let bestscore = window.localStorage.getItem("bestScore");
    if (parseInt(bestscore) < index) {
      window.localStorage.setItem("bestScore", index);
    } else {
      score.innerHTML = `Your Score is : ${index}`;
      bestScoreDiv.innerHTML = `best score is :${localStorage.getItem(
        "bestScore"
      ) !== null
        ? localStorage.getItem("bestScore")
        : storage()}`;
    }

    score.innerHTML = `Your Score is : ${index}`;
    bestScoreDiv.innerHTML = `best score is :${localStorage.getItem(
      "bestScore"
    ) !== null
      ? localStorage.getItem("bestScore")
      : storage()}`;
  };

  let aftertime = () => {
    h1.innerText = "VS";
    h1.style.color = "white";
    h1.style.fontSize = "70px";
    buttondiv.style.display = "flex";
    alterE.style.display = "none";
    main.style.cssText =
      "height: 100%;width: 100%;margin: 0;background-image: linear-gradient(rgb(38, 0, 110) 75%, rgb(209, 107, 165) 85%, rgb(199, 119, 185) 90%, white);;box-sizing: content-box;";
  };

  let befortime = () => {
    autoGenerator();
    buttondiv.style.display = "none";
    alterE.style.display = "block";
  };
  //functions
  let winFunction = () => {
    setTimeout(() => {
      befortime();
    }, 0);
    setTimeout(() => {
      h1.style.fontSize = "25px";
      h1.innerText = "Winner :)";
      h1.style.color = "#0ab22c";

      index++;
      //
      //best score functions
      scoreing();
      main.style.backgroundImage =
        " linear-gradient(rgb(38, 0, 110) 75%, rgb(209, 107, 165) 85%, rgb(199, 119, 185) 90%, #3aff00);";
    }, 2500);

    setTimeout(() => {
      aftertime();
    }, 4500);
  };

  let loseFunction = () => {
    setTimeout(() => {
      befortime();
    }, 0);
    setTimeout(() => {
      h1.innerHTML = "Loser :(";
      h1.style.color = "red";
      h1.style.fontSize = "25px";
      //
      scoreing();
      main.style.backgroundImage =
        " linear-gradient(rgb(38, 0, 110) 75%, rgb(209, 107, 165) 85%, rgb(199, 119, 185) 90%, red;";
    }, 2500);
    setTimeout(() => {
      aftertime();
    }, 4500);
  };

  let TE = () => {
    setTimeout(() => {
      befortime();
    }, 0);
    setTimeout(() => {
      h1.innerText = "Try agine :|";
      h1.style.fontSize = "25px";
      //
      //best score functions
      scoreing();
    }, 2300);

    setTimeout(() => {
      h1.innerText = "VS";
      buttondiv.style.display = "flex";
      alterE.style.display = "none";
      h1.style.fontSize = "40px";
    }, 4500);
  };
  //computer chosed img
  computerImgArray[num].style.display = "none";
  num = 0;
  computerImgArray[num].style.display = "inline-block";

  //auto genertator function

  let n = Math.floor(Math.random() * 3);
  //
  let autoGenerator = function() {
    let i = 0;

    let r = setInterval(function() {
      if (num < 2) {
        computerImgArray[num].style.display = "none";
        num++;
        computerImgArray[num].style.display = "inline-block";
      } else {
        computerImgArray[num].style.display = "none";
        num = 0;
        computerImgArray[num].style.display = "inline-block";
      }
      i++;

      if (i === 15 + n) {
        clearInterval(r);
        if (num === n) {
          console.log(true);
        } else {
          throw Error("false");
        }
      }
    }, 150);
  };

  //
  //
  //computer choosed function
  let computerchoes = avabileChoose[n];

  //user choosed img
  let imagedchoosen = document.querySelector(".active");
  let type = imagedchoosen.getAttribute("type");

  //comparing function
  //
  //

  type === computerchoes
    ? TE()
    : type === "rock" && computerchoes === "paper"
      ? loseFunction()
      : type === "rock" && computerchoes === "scissor"
        ? winFunction()
        : type === "paper" && computerchoes === "rock"
          ? winFunction()
          : type === " paper" && computerchoes === "scissor"
            ? loseFunction()
            : type === "scissor" && computerchoes === "paper"
              ? winFunction()
              : type === "scissor" && computerchoes === "rock"
                ? loseFunction()
                : Error("undifiend");
  //
  //best score functions
});
//
//
//reset button
let resetButton = document.createElement("button");
resetButton.append("Reset Score");
buttondiv.append(resetButton);
resetButton.style.cssText = "background-color: dimgrey;color: aliceblue;";
//function
resetButton.addEventListener("click", () => {
  let s = localStorage.getItem("bestScore");
  s = 0;
  localStorage.setItem("bestScore", s);
  index = 0;
  score.innerHTML = `Your Score is : ${index}`;
  bestScoreDiv.innerHTML = `best score is ${localStorage.getItem("bestScore")}`;
});
// the v2 is end finally (;
