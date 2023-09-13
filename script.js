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
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length,
    );
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

  if (lp) console.log("LP");
  if (mp) console.log("MP");
  if (hp) console.log("HP");
  if (lk) console.log("LK");
  if (mk) console.log("MK");
  if (hk) console.log("HK");
  if (left) console.log("<");
  if (right) console.log(">");
  if (up) console.log("^");
  if (down) console.log("v");
}

function gameLoop() {
  gamepadInput();
  requestAnimationFrame(gameLoop);
}