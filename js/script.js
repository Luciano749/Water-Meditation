let circle = document.getElementById("circle");
let smallCircle = document.getElementById("small-circle");
let textPercentage = document.querySelector("span");

let secondsS = document.getElementById("secondsS");
let minutesS = document.getElementById("minutesS");

let percent = 0;

//add options
for (let i = 0; i < 60; i++) {
  secondsS.innerHTML += `<option value = ${i}>${i}</option>`;
}

for (let i = 0; i <= 60; i++) {
  minutesS.innerHTML += `<option value = ${i}>${i}</option>`;
}

// ---------------------------------------------------------------------

window.onload = () => {
  secondsT.innerHTML =
    secondsS.value < 10 ? "0" + secondsS.value : secondsS.value;

  minutesT.innerHTML =
    minutesS.value < 10 ? "0" + minutesS.value : minutesS.value;
};

document.querySelectorAll("select").forEach((element) => {
  element.addEventListener("change", () => {
    secondsT.innerHTML =
      secondsS.value < 10 ? "0" + secondsS.value : secondsS.value;
    minutesT.innerHTML =
      minutesS.value < 10 ? "0" + minutesS.value : minutesS.value;
  });
});

let button = document.querySelector("button");
let song = document.getElementsByTagName("audio")[0];

button.onclick = () => {
  let controls = document.getElementById("controls");

  let checkInterval = setInterval(() => {
    if (minutesS.value > 0 || secondsS.value > 0) {
      controls.style.opacity = 0;
      controls.style.userSelect = "none";
      controls.style.pointerEvents = "none";

      song.play();
    } else {
      controls.style.opacity = 1;
      controls.style.userSelect = "";
      controls.style.pointerEvents = "";
      song.pause();
      song.currentTime = 0;
      clearInterval(checkInterval);
    }
  }, 10);

  let interval = setInterval(() => {
    if (secondsS.value <= 0 && minutesS.value <= 0) {
      clearInterval(interval);
    }

    if (secondsS.value > 0) secondsS.value--;
    if (minutesS.value > 0 && secondsS.value <= 0) {
      minutesS.value--;
      secondsS.value = 59;
    }

    // ==
    secondsT.innerHTML =
      secondsS.value < 10 ? "0" + secondsS.value : secondsS.value;
    minutesT.innerHTML =
      minutesS.value < 10 ? "0" + minutesS.value : minutesS.value;
  }, 1000);
};
