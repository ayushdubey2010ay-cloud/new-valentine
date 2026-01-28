let noCount = 0;
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let teddy = document.getElementById("teddy");
let status = document.getElementById("status");

noBtn.addEventListener("click", () => {
  noCount++;

  status.innerText = "She clicked NO 😢 (" + noCount + " times)";

  let currentSize = 1 + noCount * 0.3;
  yesBtn.style.transform = `scale(${currentSize})`;

  teddy.src = "sad" + noCount + ".gif";

  noBtn.style.opacity = 1 - noCount * 0.2;
  if (noCount >= 4) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  status.innerText = "She said YES 💍💖";
  teddy.src = "kiss.gif";
  noBtn.style.display = "none";
});

