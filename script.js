const pages = document.querySelectorAll('.page');
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) {
      page.classList.add('active');
    }
  });
}

document.getElementById('next').addEventListener('click', () => {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    showPage(current);
  }
});

// Свайп пальцем
let startX = 0;

document.querySelector('.book').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector('.book').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && current < pages.length - 1) {
    current++;
    showPage(current);
  } else if (diff < -50 && current > 0) {
    current--;
    showPage(current);
  }
});