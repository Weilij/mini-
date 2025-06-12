window.addEventListener('DOMContentLoaded', () => {
  const flash = document.getElementById('flash');
  const intro = document.getElementById('cameraIntro');

  // 顯示動畫容器
  intro.classList.remove("d-none");
  intro.classList.add("d-flex");

  // 1 秒後觸發閃光動畫
  setTimeout(() => {
    flash.style.animation = 'none';
    flash.offsetHeight; // 強制回流
    flash.style.animation = 'flashEffect 0.4s ease';
  }, 1000);

  // 1.5 秒後淡出並移除遮罩
  setTimeout(() => {
    intro.style.transition = 'opacity 0.8s ease';
    intro.style.opacity = '0';

    setTimeout(() => {
      intro.style.pointerEvents = "none";
      intro.style.display = "none";
    }, 800);
  }, 1500);
});