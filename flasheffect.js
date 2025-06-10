window.addEventListener('DOMContentLoaded', () => {
    const flash = document.getElementById('flash');
    const intro = document.getElementById('cameraIntro');

    // 1 秒後閃光
    setTimeout(() => {
      flash.style.animation = 'flashEffect 0.4s ease';
    }, 1000);

    // 1.5 秒後移除 intro 畫面
    setTimeout(() => {
      intro.style.transition = 'opacity 0.8s ease';
      intro.style.opacity = '0';
      setTimeout(() => {
        intro.style.pointerEvents = "none"; // 禁止遮擋互動
    }, 1000); // 1 秒後移除動畫畫面
    }, 1500);
  });
