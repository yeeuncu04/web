document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (name && comment) {
    const reviewList = document.getElementById('review-list');

    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    reviewItem.innerHTML = `
      <h4>${name}</h4>
      <p>${comment}</p>
    `;

    reviewList.prepend(reviewItem); // 최근 순으로 위에 추가

    // 입력창 초기화
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
  }
});
