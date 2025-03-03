const element = document.getElementById("developer-role");

const typingTexts = ["Front-end Developer", "Full-Stack Developer"];

function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text[i];
    }, i * 400);
  }

  setTimeout(() => {
    element.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 400);
}

playTypingAnimation(typingTexts[0]);
