let left = false;
let right = false;
let up = false;
let down = false;

let lk = false;
let lp = false;
let mk = false;
let mp = false;
let hk = false;
let hp = false;

window.addEventListener("gamepadconnected", (e) => {
    console.log(e.buttons);
    gameLoop();
});

function gamepadInput() {
  const gamepad = navigator.getGamepads()[0];
  const buttons = gamepad.buttons;
  lk = buttons[0].pressed;
  mk = buttons[1].pressed;
  lp = buttons[2].pressed;
  mp = buttons[3].pressed;
  hp = buttons[5].pressed;
  hk = buttons[7].pressed;

  left = buttons[14].pressed;
  right = buttons[15].pressed;
  up = buttons[12].pressed;
  down = buttons[13].pressed;

  //TODO:
  // Display corresponding button on website when button/direction is pressed
  if (lp) {
    console.log("LP");
    document.getElementById("lp").style.display = "block";
  }
  else {
    document.getElementById("lp").style.display = "none";
  }
  if (mp) {
    console.log("MP");
    document.getElementById("mp").style.display = "block";
  }
  else {
    document.getElementById("mp").style.display = "none";
  }
  if (hp) {
    console.log("HP");
    document.getElementById("hp").style.display = "block";
  }
  else {
    document.getElementById("hp").style.display = "none";
  }
  if (lk) {
    console.log("LK");
    document.getElementById("lk").style.display = "block";
  }
  else {
    document.getElementById("lk").style.display = "none";
  }
  if (mk) {
    console.log("MK");
    document.getElementById("mk").style.display = "block";
  }
  else {
    document.getElementById("mk").style.display = "none";
  }
  if (hk) {
    console.log("HK");
    document.getElementById("hk").style.display = "block";
  }
  else {
    document.getElementById("hk").style.display = "none";
  }
  if (left) {
    console.log("<");
    document.getElementById("left").style.display = "block";
  }
  else {
    document.getElementById("left").style.display = "none";
  }
  if (right) {
    console.log(">");
    document.getElementById("right").style.display = "block";
  }
  else {
    document.getElementById("right").style.display = "none";
  }
  if (up) {
    console.log("^");
    document.getElementById("up").style.display = "block";
  }
  else {
    document.getElementById("up").style.display = "none";
  }
  if (down) {
    console.log("v");
    document.getElementById("down").style.display = "block";
  }
  else {
    document.getElementById("down").style.display = "none";
  }
}

function gameLoop() {
  gamepadInput();
  requestAnimationFrame(gameLoop);
}