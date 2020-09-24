document.addEventListener("keydown", function (event) {
  if (event.code === "KeyA") {
      let a = new Audio("A.mp3");
      a.play();
  } else if (event.code === "KeyS") {
      let s = new Audio("S.mp3");
      s.play();
  } else if (event.code === "KeyD") {
      let d = new Audio("D.mp3");
      d.play();
  } else if (event.code === "KeyF") {
      let f = new Audio("F.mp3");
      f.play();
  } else if (event.code === "KeyG") {
      let g = new Audio("G.mp3");
      g.play();
  } else if (event.code === "KeyH") {
      let h = new Audio("H.mp3");
      h.play();
  } else if (event.code === "KeyJ") {
      let j = new Audio("J.mp3");
      j.play();
  } else if (event.code === "KeyW") {
      let d = new Audio("W.mp3");
      d.play();
  } else if (event.code === "KeyE") {
      let f = new Audio("E.mp3");
      f.play();
  } else if (event.code === "KeyT") {
      let g = new Audio("T.mp3");
      g.play();
  } else if (event.code === "KeyY") {
      let h = new Audio("Y.mp3");
      h.play();
  } else if (event.code === "KeyU") {
      let j = new Audio("U.mp3");
      j.play();
  } else {
      console.log("Warning! Wrong key is pressed.");
  }
});