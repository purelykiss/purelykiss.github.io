console.log('Header script loaded');
document.querySelectorAll('.menu').forEach((menu) => {
  console.log('Processing menu:', menu);
  const submenu = menu.querySelector('.submenu');
  if (!submenu) return;

  // 상태 변수
  let isOverMenu = false;
  let isOverSubmenu = false;

  // 상태 확인 및 처리
  function evaluateMenuState() {
    if (isOverMenu || isOverSubmenu) {
      openMenu(submenu);
    } else {
      startClosingMenu(submenu);
    }
  }

  // 마우스 진입
  menu.addEventListener('mouseenter', () => {
    isOverMenu = true;
    evaluateMenuState();
  });

  menu.addEventListener('mouseleave', () => {
    isOverMenu = false;
    evaluateMenuState();
  });

  submenu.addEventListener('mouseenter', () => {
    isOverSubmenu = true;
    evaluateMenuState();
  });

  submenu.addEventListener('mouseleave', () => {
    isOverSubmenu = false;
    evaluateMenuState();
  });

  // 전환 종료 시 close 처리
  submenu.addEventListener('transitionend', () => {
    if (submenu.classList.contains('closing')) {
      finishClosingMenu(submenu);
    }
  });
});

// 클래스 제어 메서드들
function openMenu(el) {
  el.classList.remove('close', 'closing');
  el.classList.add('open');
}

function startClosingMenu(el) {
  el.classList.remove('open');
  el.classList.add('closing');
}

function finishClosingMenu(el) {
  el.classList.remove('closing');
  el.classList.add('close');
}
