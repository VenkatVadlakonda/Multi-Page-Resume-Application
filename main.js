const element = document.getElementById("developer-role");

const typingTexts = ["Front-end Developer", "Full-Stack Developer"];

function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text[i];
    }, i * 300);
  }

  setTimeout(() => {
    element.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 300);
}

playTypingAnimation(typingTexts[0]);
