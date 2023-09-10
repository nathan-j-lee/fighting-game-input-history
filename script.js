window.addEventListener("gamepadconnected", (e) => {

    console.log("Something connected");
    console.log(e.gamepad.index);
});

console.log("Testing");