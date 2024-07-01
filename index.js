// 헤더 안가리게 하는 스크립트

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = 79; // 헤더의 높이를 80px로 설정
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: targetPosition - headerHeight,
            // behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
  var title = document.querySelector(".skill .main-title");
  var skillSection = document.querySelector(".skill");

  var skillSectionBottom = skillSection.offsetTop + skillSection.offsetHeight;
  var titleBottom = title.offsetTop + title.offsetHeight;

  if (window.scrollY >= skillSectionBottom - title.offsetHeight) {
    title.style.position = "absolute";
    title.style.bottom = "80px";
  } else {
    title.style.position = "sticky";
    title.style.bottom = "auto";
  }
};


// 글자써지는 스크립트
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["매일매일 발전하는", "배움에 게으르지 않는", "아이디어가 풍부한", "끈기와 책임감이 강한", "새로움에 도전하는"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1000;
const colors = ["#31A8FF", "#F66C3B", "#51FF72", "#9999ff", "#FEDD22"];
let textArrayIndex = 0;
let charIndex = 0;
let colorIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    typedTextSpan.style.backgroundColor = colors[colorIndex];
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    typedTextSpan.style.backgroundColor = colors[colorIndex];
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    colorIndex = (colorIndex + 1) % colors.length;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


