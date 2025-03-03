const cards = document.querySelectorAll(".card");
const steps = document.querySelectorAll(".step");
const stepArrows = document.querySelectorAll(".stepArrow");
const gameCharacters = document.querySelectorAll(".gameCharacter");
const gameLogos = document.querySelectorAll(".gameLogo");
const themeToggle = document.getElementById("theme-toggle");
if (this.window.innerWidth <= 769) {
  for (let i = 0; i < gameCharacters.length; i++) {
    gameCharacters[i].style.display = "none";
    gameLogos[i].style.marginLeft = 0;
  }
} else {
  for (let i = 0; i < gameCharacters.length; i++) {
    gameCharacters[i].style.display = "block";
    gameLogos[i].style.marginLeft = "-30%";
  }
}

window.addEventListener("resize", function () {
  if (this.window.innerWidth <= 769) {
    for (let i = 0; i < gameCharacters.length; i++) {
      gameCharacters[i].style.display = "none";
      gameLogos[i].style.marginLeft = 0;
    }
  } else {
    for (let i = 0; i < gameCharacters.length; i++) {
      gameCharacters[i].style.display = "block";
      gameLogos[i].style.marginLeft = "-30%";
    }
  }
});
let darkMode = false;
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (!darkMode) {
    themeToggle.children[0].src = "img/lightMode.png";
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#222";
    }
    darkMode = !darkMode;
  } else {
    themeToggle.children[0].src = "img/darkMode.png";
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#f4f4f4";
    }
    darkMode = !darkMode;
  }
});
let stepCount = 0;
setInterval(() => {
  for (let i = 0; i < steps.length; i++) {
    if (steps[i].classList.length == 3) {
      steps[i].classList.toggle("gold");
    }
  }
  steps[stepCount].classList.toggle("gold");
  if (steps.length - 1 == stepCount) {
    stepCount = 0;
  } else {
    stepCount++;
  }
}, 3000);

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
});

const stepElements = document.querySelectorAll(".step");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
);

stepElements.forEach((el) => observer.observe(el));
