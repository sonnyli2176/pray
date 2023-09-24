const hamMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const darkMode = document.querySelector(".darkMode");
const textLight = document.querySelector(".textLight");
const textDark = document.querySelector(".textDark");
let sun = document.querySelector(".sun");
const title = document.querySelector('.title');
const subHeadingChange = document.querySelector(".subheading");

// STORAGE ELEMENTS
let darkModeStorage = localStorage.getItem("darkMode");
let sunStorage = localStorage.getItem("sunDark");
let textMode = localStorage.getItem("textDark");
let titleChange = localStorage.getItem("titleDark");
let titleStorage = localStorage.getItem("title");
let subHeadingStorage = localStorage.getItem("subheading");

// HAMBURGER MENU
        hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
        sun.classList.toggle("active");
      });


// CLOSING HAM
document.addEventListener('click', (e) => {
  if (!hamMenu.contains(e.target) && !navMenu.contains(e.target)) {
    hamMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});


// BODY MAIN BACKGROUND THEME
const enableDark = () => {
    document.body.classList.toggle("darkMode");
    localStorage.setItem("darkMode", "on");
};

const disableDark = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "off");
};

if (darkModeStorage === "on") {
    enableDark();
  } else {
    disableDark();
}

  sun.addEventListener("click", () => {
    darkModeStorage = localStorage.getItem("darkMode");
    if (darkModeStorage !== "on") {
      enableDark();
    } else {
      disableDark();
    }
  });


// ===============   SUN MOON THEME   ===============
function sunDark() {
    sun.src = "images/moon.png";
    localStorage.setItem("sunDark", "on");
}

function sunLight() {
    sun.src = "images/sun.png";
    localStorage.setItem("sunDark", "off");
  }

if (sunStorage === "on"? sunDark() : sunLight());
    sun.addEventListener("click", () => {
    sunStorage = localStorage.getItem("sunDark");
      if (sunStorage !== "on") {
  sunDark();
    localStorage.setItem("sunDark", "on");
  } else {
    sunLight();
    localStorage.setItem("sunDark", "off");
  }
});

  // TEXT THEME
  function TextDark() {
    if (textLight) {
      textLight.classList.toggle("textDark");
      localStorage.setItem("textDark", "on");
    }
  };
  
  function TextLight() {
    if (textLight) {
      textLight.classList.remove("textDark");
    localStorage.setItem("textDark", "off");
  }
};
    textMode === "on"? TextDark() : TextLight();
    sun.addEventListener("click", () => {
      textMode = localStorage.getItem("textDark");
    textMode !== "on"? TextDark() : TextLight();
});

// TITLE THEME SWITCHER
function titleLight() {
  if (title) {
    title.classList.remove("titleDark");
    localStorage.setItem("titleDark", "off");
  }
}

function titleDark() {
  if (title) {
    title.classList.add('titleDark');
    localStorage.setItem('titleDark', 'on');
  }
}
// if (titleChange === "on") {
//   titleDark();
// } else {
//   titleLight();
// }

titleChange === 'on' ? titleDark() : titleLight();
    sun.addEventListener("click", () => {
      titleChange = localStorage.getItem("titleDark");
      titleChange !== "on" ? titleDark() : titleLight();
    });


// SUBHEADING new
function subHeading() {
  if (subHeadingChange) {
    subHeadingChange.classList.remove("active");
    localStorage.setItem("subheading", "off");
  }
}

function subHeadingDark() {
  if (subHeadingChange) {
    subHeadingChange.classList.add('active');
    localStorage.setItem('subheading', 'on');
  }
}

subHeadingStorage === 'on' ? subHeadingDark() : subHeading();
    sun.addEventListener("click", () => {
      subHeadingStorage = localStorage.getItem("subheading");
      subHeadingStorage !== "on" ? subHeadingDark() : subHeading();
    });