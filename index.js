// locomotive scroll

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

// heading animation

document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".heading-animation");

  headings.forEach((heading) => {
    const textContent = heading.textContent;
    const spannedText = textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    heading.innerHTML = spannedText;

    gsap.to(heading.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: heading,
        start: "top bottom",
        end: "bottom center",
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.1,

      color: "#fff",
    });
  });
});

//  canvas
function canvas() {
  const canvas = document.querySelector("#canvas1");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./assets/frames00007.png
./assets/frames00010.png
./assets/frames00013.png
./assets/frames00016.png
./assets/frames00019.png
./assets/frames00022.png
./assets/frames00025.png
./assets/frames00028.png
./assets/frames00031.png
./assets/frames00034.png
./assets/frames00037.png
./assets/frames00040.png
./assets/frames00043.png
./assets/frames00046.png
./assets/frames00049.png
./assets/frames00052.png
./assets/frames00055.png
./assets/frames00058.png
./assets/frames00061.png
./assets/frames00064.png
./assets/frames00067.png
./assets/frames00070.png
./assets/frames00073.png
./assets/frames00076.png
./assets/frames00079.png
./assets/frames00082.png
./assets/frames00085.png
./assets/frames00088.png
./assets/frames00091.png
./assets/frames00094.png
./assets/frames00097.png
./assets/frames00100.png
./assets/frames00103.png
./assets/frames00106.png
./assets/frames00109.png
./assets/frames00112.png
./assets/frames00115.png
./assets/frames00118.png
./assets/frames00121.png
./assets/frames00124.png
./assets/frames00127.png
./assets/frames00130.png
./assets/frames00133.png
./assets/frames00136.png
./assets/frames00139.png
./assets/frames00142.png
./assets/frames00145.png
./assets/frames00148.png
./assets/frames00151.png
./assets/frames00154.png
./assets/frames00157.png
./assets/frames00160.png
./assets/frames00163.png
./assets/frames00166.png
./assets/frames00169.png
./assets/frames00172.png
./assets/frames00175.png
./assets/frames00178.png
./assets/frames00181.png
./assets/frames00184.png
./assets/frames00187.png
./assets/frames00190.png
./assets/frames00193.png
./assets/frames00196.png
./assets/frames00199.png
./assets/frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.canvas-1`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".canvas-1",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();

// canvas 1
function canvas1() {
  const canvas = document.querySelector("#canvas2");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./assets/bridges00004.png
./assets/bridges00007.png
./assets/bridges00010.png
./assets/bridges00013.png
./assets/bridges00016.png
./assets/bridges00019.png
./assets/bridges00022.png
./assets/bridges00025.png
./assets/bridges00028.png
./assets/bridges00031.png
./assets/bridges00034.png
./assets/bridges00037.png
./assets/bridges00040.png
./assets/bridges00043.png
./assets/bridges00046.png
./assets/bridges00049.png
./assets/bridges00052.png
./assets/bridges00055.png
./assets/bridges00058.png
./assets/bridges00061.png
./assets/bridges00064.png
./assets/bridges00067.png
./assets/bridges00070.png
./assets/bridges00073.png
./assets/bridges00076.png
./assets/bridges00079.png
./assets/bridges00082.png
./assets/bridges00085.png
./assets/bridges00088.png
./assets/bridges00091.png
./assets/bridges00094.png
./assets/bridges00097.png
./assets/bridges00100.png
./assets/bridges00103.png
./assets/bridges00106.png
./assets/bridges00109.png
./assets/bridges00112.png
./assets/bridges00115.png
./assets/bridges00118.png
./assets/bridges00121.png
./assets/bridges00124.png
./assets/bridges00127.png
./assets/bridges00130.png
./assets/bridges00133.png
./assets/bridges00136.png
./assets/bridges00139.png
./assets/bridges00142.png
./assets/bridges00145.png
./assets/bridges00148.png
./assets/bridges00151.png
./assets/bridges00154.png
./assets/bridges00157.png
./assets/bridges00160.png

`;
    return data.split("\n")[index];
  }

  const frameCount = 53;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.canvas-2`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".canvas-2",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas1();

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateCharacters() {
    const animatedHeading = document.querySelectorAll(".animated-heading");
    animatedHeading.forEach((item) => {
      const textContent = item.textContent;
      const spannedText = textContent
        .split("")
        .map((char) => (char.trim() !== "" ? `<span>${char}</span>` : char))
        .join("");

      item.innerHTML = spannedText;

      gsap.fromTo(
        item.querySelectorAll("span"),
        {
          opacity: 0,
          rotate: "60deg",
          y: 100,
        },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom 60%",
            scroller: "#main",
            scrub: 0.5,
          },
          onComplete: () => {
            gsap.set(item.querySelectorAll("span"), { clearProps: "all" });
          },
        }
      );
    });
  }

  animateCharacters();

  window.addEventListener("resize", animateCharacters);
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateCharacters() {
    const upAnimation = document.querySelectorAll(".up-animation");
    upAnimation.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom 60%",
            scroller: "#main",
            scrub: 0.5,
          },
        }
      );
    });
  }

  animateCharacters();

  window.addEventListener("resize", animateCharacters);
});

//// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/////////// animation /////////////

const timeline = gsap.timeline();
timeline
  .from(".overlay-text", {
    opacity: 0,
    y: 100,
    delay: 0.5,
  })
  .to(".overlay-text", {
    opacity: 0,
    y: -60,
    delay: 3,
    ease: "expo.inOut",
  })
  .to(".overlay-1", {
    y: "-100%",
    ease: "expo.inOut",
  })
  .to(
    ".overlay-2",
    {
      y: "-100%",
      ease: "expo.inOut",
    },
    "-=.3"
  )
  .from(".home-main-heading", {
    y: 100,
    opacity: 0,
  })
  .from(".home-para", {
    opacity: 0,
  })
  .from(
    ".home-button",
    {
      opacity: 0,
      x: "-200%",
    },
    "-=.3"
  );

const menuButton = document.querySelector(".menu-btn");
const hideMenu = document.querySelector(".hide-btn");
const navBar = document.querySelector(".navbar");
const backdrop = document.querySelector(".backdrop");
menuButton.addEventListener("click", () => {
  navBar.style.width = "40%";
  backdrop.style.width = "100%";
});

hideMenu.addEventListener("click", () => {
  navBar.style.width = "0";
  backdrop.style.width = "0";
});
backdrop.addEventListener("click", () => {
  navBar.style.width = "0";
  backdrop.style.width = "0";
});
