import "./styles.css";

/*document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;*/

// const button = document.getElementById("changeColorButton");
// const text = document.getElementById("ChangeColorText");
/* update code */
//change background body
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "blue", "gray", "black", "yellow"];

//set color body default start
body.style.backgroundColor = "green";
//add event button
button.addEventListener("click", changeBgColor);

//functie button
function changeBgColor() {
  // text.style.backgroundColor = "blue";
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
