const colors = [
  "#000000",
  "#0000FF",
  "#808080",
  "#008000",
  "#800080",
  "#FF0000",
  "#FFFFFF",
  "#F0F8FF",
  "#FF7F50",
  "#B22222",
  "#FF69B4",
  "#FFFACD",
  "#D98B7A",
  "EAE52E",
  "2EEA8E",
  "2EDFEA",
  "2E86EA",
  "952EEA",
  "EA2EBA",
  "EA2E54",
  "Orange",
  "#FE1B56",
  "#C93C4B",
  "#64B380",
  "#516310",
  "#56B510",
  "#DD4F4C",
  "#77CAAD",
  "#BD457F",
  "#6EBAC1",
  "#D4D6DE",
  "#4A5AE0",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNum = randomNumber();
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
