function pressKey(event) {
  let keys = {
    "KeyA": "A", "KeyS": "S", "KeyD": "D", "KeyF": "F", "KeyG": "G", "KeyH": "H", "KeyJ": "J",
    "KeyW": "W", "KeyE": "E", "KeyT": "T", "KeyY": "Y", "KeyU": "U"
  };
  if (event.code in keys) {
    let audio = new Audio("sounds/" + keys[event.code] + ".mp3");
    audio.play();
  } else {
    console.log("Wrong key is pressed.")
  }
}

function clickKey(event) {
  let keys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
  if (keys.includes(event.target.innerText)) {
    let audio = new Audio("sounds/" + event.target.innerText + ".mp3");
    audio.play();
  }
}

document.addEventListener("keydown", event => {
  pressKey(event);
});

document.addEventListener("click", event => {
  clickKey(event);
});