const burger = document.querySelector(".burgerIcon");
const burgerExit = document.querySelector(".closeButton");
const tlMenu = gsap.timeline({ paused: true });

// Navigation
tlMenu
  .to("nav", 0.3, { autoAlpha: 1 })
  .staggerFromTo(
    "nav li",
    0.5,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 },
    0.1
  );

burger.addEventListener("mouseover", () => {
  gsap.to(".burgerLine:first-child", 0.2, { x: -10 });
  gsap.to(".burgerLine:last-child", 0.2, { x: 10 });
});

burger.addEventListener("mouseout", () => {
  gsap.to(".burgerLine:first-child", 0.2, { x: 0 });
  gsap.to(".burgerLine:last-child", 0.2, { x: 0 });
});

burger.addEventListener("click", () => tlMenu.play());
burgerExit.addEventListener("click", () => tlMenu.reverse(0.6));

// Hero
const tlHero = gsap.timeline({ delay: 0.75 });

tlHero
  .fromTo("#hero h1", 0.6, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    "#hero .learnMoreButton",
    0.8,
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut }
  );

// fourColSection
Array.from(document.querySelectorAll(".fourColItem")).map((item) => {
  item.addEventListener("mouseover", () => {
    gsap.to(item, 0.4, {
      y: -10,
      scale: 1.075,
      boxShadow: "0 0 20px rgba(0,0,0,0.36)",
    });
  });
  item.addEventListener("mouseout", () => {
    gsap.to(item, 0.4, {
      y: 0,
      scale: 1,
      boxShadow: "0 0 20px rgba(0,0,0,0.06)",
    });
  });
});

// Services
const boxes = Array.from(document.querySelectorAll(".serviceBoxInner"))

gsap.set(".serviceBoxInner", { y: 200, opacity: 0 });

Array.from(document.querySelectorAll(".serviceBox")).map((item, index) => {
  item.addEventListener("mouseover", () => {
    gsap.to(boxes[index], 0.6, { y: 0, opacity: 1, ease: Power2.easeInOut });
  });
  item.addEventListener("mouseout", () => {
    gsap.to(boxes[index], 0.6, { y: 200, opacity: 0 });
  });
});

// Cogs
gsap.to('.cogLeft', 7, { rotation: 360, repeat: -1, ease: "none"})
gsap.to('.cogRight', 7, { rotation: -360, repeat: -1, ease: "none"})
