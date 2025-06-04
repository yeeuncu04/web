const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 한 번 클릭할 때 이동할 거리 (카드 너비 + 간격)
const scrollAmount = 290; // 카드 너비 260px + gap 30px

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// 자동 슬라이드 (3초마다 오른쪽으로 이동)
setInterval(() => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}, 3000);
