window.addEventListener("gamepadconnected", (e) => {
    console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
    );
});

const gp = navigator.getGamepads()[0];
console.table(gp.buttons);