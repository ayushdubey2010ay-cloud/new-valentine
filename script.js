let noCount = 0;

const teddy = document.getElementById("teddy");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const text = document.getElementById("text");

function noClick() {
  noCount++;

  // YES button SUPER BIG
  let scaleValue = 1.3 + noCount * 0.6;
  yesBtn.style.transform = `scale(${scaleValue})`;

  // Teddy emotions
  if (noCount === 1) teddy.src = "sad1.gif";
  if (noCount === 2) teddy.src = "sad2.gif";
  if (noCount === 3) teddy.src = "sad3.gif";

  // NO hide after 3
  if (noCount >= 3) {
    noBtn.style.display = "none";
    text.innerText = "Please say YES 🥺💔";
  }
}

function yesClick() {
  teddy.src = "happy.gif";
  text.innerText = "Yayyy! You made me the happiest 🥰💋";
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(2.8)";
}
