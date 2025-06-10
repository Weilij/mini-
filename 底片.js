// 這裡可以加上自動輪播或左右控制功能
  // 例如自動捲動底片效果
  const container = document.querySelector('.filmstrip-container');

  let scrollAmount = 0;
  const scrollSpeed = 1;

  function autoScroll() {
    scrollAmount += scrollSpeed;
    container.scrollLeft = scrollAmount;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();