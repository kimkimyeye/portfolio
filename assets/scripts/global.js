
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