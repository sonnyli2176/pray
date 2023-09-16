const hamMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const darkMode = document.querySelector(".darkMode");
const textLight = document.querySelector(".textLight");
const textDark = document.querySelector(".textDark");
let sun = document.querySelector(".sun");
const title = document.querySelector('.title');

// STORAGE ELEMENTS
let darkModeStorage = localStorage.getItem("darkMode");
let sunStorage = localStorage.getItem("sunDark");
let textMode = localStorage.getItem("textDark");
let titleChange = localStorage.getItem("titleDark");
let titleStorage = localStorage.getItem('title');

// HAMBURGER MENU
        hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
        sun.classList.toggle("active");
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
if (titleChange === "on") {
  titleDark();
} else {
  titleLight();
}

titleChange === 'on' ? titleDark() : titleLight();
    sun.addEventListener("click", () => {
      titleChange = localStorage.getItem("titleDark");
      titleChange !== "on" ? titleDark() : titleLight();
    });


// TITLE THEME SWITCHER-----------------------------------------------------------------
function titleLightMode() {
  if (title) {
    title.classList.remove("titleDark");
    localStorage.setItem("titleDark", "off");
  }
}

function titleDarkMode() {
  if (title) {
    titleStorage.classList.add("titleDark");
    localStorage.setItem("titleDark", "on");
  }
}
if (titleStorage === "on") {
  titleDarkMode();
} else {
  titleLightMode();
}

titleStorage === "on" ? titleDarkMode() : titleLightMode();
sun.addEventListener("click", () => {
  titleStorage = localStorage.getItem("titleDark");
  titleStorage !== "on" ? titleDarkMode() : titleLightMode();
});
// --------------------------------------------------------------------------


