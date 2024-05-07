const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
const toBottomEl = document.querySelector('#to-bottom');
const footerEl = document.querySelector('footer').offsetTop;

window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });

    // to-top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    })

    return;
  }
  // 배지 보이기
  gsap.to(badgeEl, 0.6, {
    opacity: 1,
    display: 'block',
  });
  
  // to-top 버튼 숨기기
  gsap.to(toTopEl, .2, {
    x: 100,
  });
  
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});

toBottomEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: footerEl,
  })
})

const  fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 지속시간, 옵션);)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 씩 실행.
    opacity: 1,
  });
});

/**
 * 선택자, 옵션 객체 
 */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 가운데 슬라이드가 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

// awards swiper
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    // 숨긴처리
    promotionEl.classList.add('hide');
    promotionToggleBtn.classList.add('hide');
    return;
  }
  // 보임처리
  promotionEl.classList.remove('hide');
  promotionToggleBtn.classList.remove('hide');
});

// 랜덤함수
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소들
      triggerHook: .8, // viewport .8 지점에서 걸리면 실행된다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
