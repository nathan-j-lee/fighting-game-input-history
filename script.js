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
  if (lk || lp || mp || mk) console.log(buttons);
}

function gameLoop() {
  gamepadInput();
  requestAnimationFrame(gameLoop);
}