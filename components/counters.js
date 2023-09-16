import {
  RosaryBeadsAllClasses, RosaryString, holyRosary, crucifix, firstBigDecade, secondBigDecade, thirdBigDecade,
fourthBigDecade,fifthBigDecade,apostleCreed,gloryBe} from "./holyRosaries.js";
import {
  first1, first2, first3, first4, first5, first6,
first7,first8,first9,first10} from "./holyRosaries.js";

import {
  second1, second2, second3, second4, second5, second6,
second7,second8,second9,second10} from "./holyRosaries.js";

import {
  third1, third2, third3, third4, third5, third6,
third7,third8,third9,third10} from "./holyRosaries.js";

import {
  fourth1, fourth2, fourth3, fourth4, fourth5, fourth6,
  fourth7, fourth8, fourth9, fourth10
} from "./holyRosaries.js";

import {
  fifth1, fifth2, fifth3, fifth4, fifth5, fifth6,
  fifth7, fifth8, fifth9, fifth10
} from "./holyRosaries.js"

// --------------------------------------------------
function theHolyRosaryActive() {
  holyRosary.classList.toggle("active");
}
function theHolyRosaryRemove() {
  holyRosary.classList.remove("active");
}

function theRosaryString() {
  RosaryString.classList.toggle("active");
}
function theRosaryStringRemove() {
  RosaryString.classList.remove("active");
}

function theHolyCrucifixActive() {
  crucifix.classList.toggle("active");
}
function theHolyCrucifixRemove() {
  crucifix.classList.remove("active");
}

// const Rosary = document.querySelectorAll('.circle1');
function runningBeads() {
  RosaryBeadsAllClasses.forEach((bead) => {
      bead.classList.toggle('active');
     });
};

function runningBeadsRemove() {
  RosaryBeadsAllClasses.forEach((bead) => {
    bead.classList.remove('active');
    return bead;
     })
};

// ------------------------------------------------------------
const randomRoses = document.getElementById('roses');
const randomBunches = document.getElementById('bunches');
const rosesArray = [
  "orange.png",
  "peach.png",
  "pink.png",
  "purple.png",
  "red.png",
  "white.png",
  "yellow.png",
  "lily.png",
  "yellowlily.png"
];

function getRandomRoses() {
  const random_i = Math.floor(Math.random() * rosesArray.length);
  const selectedRose = rosesArray[random_i];
  document.getElementById('roses').src = `./roses/${selectedRose}`;
}

const bunchesArray = [
  'bunch2.png',
  'bunch3.png',
  'bunch4.png',
  'bunch5.png',
  'bunch6.png',
  'bunch7.png',
  'bunch8.png',
  'bunch9.png',
  'bunch10.png',
  'colours.png',
  'colourtulips.png',
  'lily.png',
  'orange.png',
  'oranges.png',
  'pink.png',
  'purple.png',
  'red.png',
  'white.png',
  'yellow.png'
];
function getRandomBunch() {
  const random_i = Math.floor(Math.random() * bunchesArray.length);
  const selectedBunch = bunchesArray[random_i];
  document.getElementById("bunches").src = `./roses_b/${selectedBunch}`;
}

const redRose = document.getElementById("roses");
function sendRose() {
  setTimeout(() => {
    redRose.classList.add('active');
  }, 1000);
}

function fadeOutRose() {
  setTimeout(() => {
    redRose.classList.remove('active');
    }, 15000);
clearTimeout(fadeOutRose)
}


function sendBunch() {
  const bunches = document.getElementById('bunches');
    setTimeout(() => {
      bunches.classList.add("active");
    }, 4000);
}


function bunchRemove() {
  const bunches = document.getElementById("bunches");
      setTimeout(() => {
        bunches.classList.remove("active");
      }, 30000);
  clearTimeout(bunches);
};


// BUTTONS COUNT
 export const nextBtn = document.getElementById("beads-plus");
 export const resetBtn = document.getElementById("reset-btn");
 const mysteriesMessage = document.querySelector(".pop_up_msg");
 const counterContainer = document.querySelector(
  "#counters-and-buttons-container"
);

// CLASSES
 const joyfulClass = document.querySelectorAll(".joyful");
 const lightClass = document.querySelectorAll(".light");
 const sorrowClass = document.querySelectorAll(".sorrowful");
 const gloriousClass = document.querySelectorAll(".glorious");

// Mysteries Buttons Selection
 const joyfulBtn = document.querySelector(".joyful_btn");
 const lightBtn = document.querySelector(".light_btn");
 const sorrowfulBtn = document.querySelector(".sorrowful_btn");
 const gloriousBtn = document.querySelector(".glorious_btn");

// BUTTONS COUNT
 const beadsDisplay = document.getElementById("beads");
 const decadesDisplay = document.getElementById("decades");
 const rosariesDisplay = document.getElementById("rosaries");
 let beadsStored = localStorage.getItem("beadsStored");
 let decadesStored = localStorage.getItem("decadesStored");
 let rosariesStored = localStorage.getItem("rosariesStored");

 export let beads = beadsStored ? parseInt(beadsStored) : 0;
 export let decades = decadesStored ? parseInt(decadesStored) : 0;
 export let rosaries = rosariesStored ? parseInt(rosariesStored) : 0;

// Update display
export function updateDisplay() {
  beadsDisplay.innerText = beads;
  decadesDisplay.innerText = decades;
  rosariesDisplay.innerText = rosaries;
}

let mystery = [];
let mysteryOrigin = mystery.slice();

let AllButtons = [joyfulBtn, lightBtn, sorrowfulBtn, gloriousBtn];
let InActivities = 180000;
let TimeOutId;
function closeContainer() {
  counterContainer.classList.remove("active");
}

function resetTimeout() {
  clearTimeout(TimeOutId);
  TimeOutId = setTimeout(closeContainer, InActivities);
}

AllButtons.forEach((button) => {
  button.addEventListener("click", () => {
    counterContainer.classList.add("active");
  });
});

counterContainer.addEventListener("mousemove", resetTimeout);

 class Mysteries {
  constructor(joy, lit, sor, glo, mystery) {
    this.joy = joyfulClass;
    this.lit = lightClass;
    this.sor = sorrowClass;
    this.glo = gloriousClass;
    this.mystery = [];
  }
  // GET ACTIVE JOY
  getJoyActive() {
    this.joy.forEach((j) => {
      j.classList;
      mystery.push(j);
    });
  }
  //   // DEACTIVE JOY
  DeactivateActiveJoy() {
    this.joy.forEach((j) => {
      j.classList.remove("active");
    });
  }
  //   // GET ACTIVE LIGHT
  getLightActive() {
    this.lit.forEach((l) => {
      l.classList;
      mystery.push(l);
    });
  }
  //   // DEACTIVATE LIGHT
  DeactivateLight() {
    this.lit.forEach((l) => {
      l.classList.remove("active");
    });
  }
  //   // GET ACTIVE SORROW
  getSorrowActive() {
    this.sor.forEach((s) => {
      s.classList;
      mystery.push(s);
    });
  }
  //   // DEACTIVE SORROW
  DeactivateSorrow() {
    this.sor.forEach((s) => {
      s.classList.remove("active");
    });
  }
  //   // GET ACTIVE GLORIOUS
  getGloriousActive() {
    this.glo.forEach((g) => {
      g.classList;
      mystery.push(g);
    });
  }
  //   // DEACTIVATE GLORIOUS
  DeactivateGlorious() {
    this.glo.forEach((g) => {
      g.classList.remove("active");
    });
  }

}

function updateMysteries() {
  joyActive.getJoyActive();
  lightActive.getLightActive();
  sorrowActive.getSorrowActive();
  gloriousActive.getGloriousActive();
}

 const joyActive = new Mysteries("joy");
 const lightActive = new Mysteries("lit");
 const sorrowActive = new Mysteries("sor");
 const gloriousActive = new Mysteries("glo");

   const runningBeadsOnce = () => {
     if (beads <= 0) {
       theHolyCrucifixActive(), theRosaryString(), runningBeads();
     } else {
       theHolyCrucifixRemove(), theRosaryStringRemove(), runningBeadsRemove();
     }
     setTimeout(() => {
       theHolyCrucifixRemove(), theRosaryStringRemove(), runningBeadsRemove();
}, 2000);
}
   

joyfulBtn.addEventListener("click", () => {
  mystery.length = 0;
  joyActive.getJoyActive(mysteryOrigin);
     runningBeadsOnce();
});

lightBtn.addEventListener("click", () => {
  mystery.length = 0;
  lightActive.getLightActive(mysteryOrigin);
  runningBeadsOnce();
});

sorrowfulBtn.addEventListener("click", () => {
  mystery.length = 0;
  sorrowActive.getSorrowActive(mysteryOrigin);
  runningBeadsOnce();
});

gloriousBtn.addEventListener("click", () => {
  mystery.length = 0;
  gloriousActive.getGloriousActive(mysteryOrigin);
  runningBeadsOnce();
});


// RESET BEADS COLOUR
function ResetBeads() {
  const circleElements = document.getElementsByTagName('circle');
  for (let i = 0; i < circleElements.length; i++) {
    const circleEl = circleElements[i];
    // Set the initial fill color of the circle element and store the original fill color
    circleEl.setAttribute("fill", "#0098DA");
    circleEl.setAttribute("data-original-fill", "#0098DA");

    // Reset the Fill Attribute to previous state;
    if (circleEl.hasAttribute("data-original-fill")) {
      const originalFill = circleEl.getAttribute("data-original-fill");
      circleEl.setAttribute("fill", originalFill);
    }
  }
}


// Increment count
export function incrementCount() {
  beads++;
  if (beads % 10 === 0) {
    decades++;
    if (decades === 5) {
      decades = 0;
      rosaries++;
    }
  }
  if (beads === 1) {
    first1.setAttribute("fill", "#f677f6");
    mystery[0].classList.add("active");
    sendRose();
    getRandomRoses();
    fadeOutRose();
  }
  if (beads === 2) {
    first2.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 3) {
    first3.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 4) {
    first4.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 5) {
    first5.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 6) {
    first6.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 7) {
    first7.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 8) {
    first8.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 9) {
    first9.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 10) {
    first10.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
    updateMysteries()
    updateDisplay();

    setTimeout(() => {
      firstBigDecade.setAttribute("fill", "white");
      setTimeout(() => {
        mystery[0].classList.remove("active");
        mystery[1].classList.add("active");
      }, 5000);
    }, 3000);
  }
  
  if (beads === 11) {
    second1.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose();
  }
  
  if (beads === 12) {
    second2.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 13) {
    second3.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 14) {
    second4.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 15) {
    second5.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 16) {
    second6.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 17) {
    second7.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 18) {
    second8.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 19) {
    second9.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 20) {
    second10.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
    setTimeout(() => {
      secondBigDecade.setAttribute("fill", "white");
      setTimeout(() => {
        mystery[1].classList.remove("active");
        mystery[2].classList.add("active");
      }, 5000);
    }, 3000);
    updateMysteries();
    updateDisplay();
    
  }

  // THIRD DECADES
  if (beads === 21) {
    third1.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 22) {
    third2.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 23) {
    third3.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 24) {
    third4.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 25) {
    third5.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 26) {
    third6.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 27) {
    third7.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 28) {
    third8.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 29) {
    third9.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 30) {
    third10.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
    setTimeout(() => {
      thirdBigDecade.setAttribute("fill", "white");
      setTimeout(() => {
        mystery[2].classList.remove("active");
        mystery[3].classList.add("active");
      }, 5000);
    }, 3000);
    updateMysteries();
    updateDisplay();
  }

  // FOURTH DECADES
  if (beads === 31) {
    fourth1.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 32) {
    fourth2.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 33) {
    fourth3.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 34) {
    fourth4.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 35) {
    fourth5.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 36) {
    fourth6.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 37) {
    fourth7.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 38) {
    fourth8.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 39) {
    fourth9.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 40) {
    fourth10.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
    setTimeout(() => {
      fourthBigDecade.setAttribute("fill", "white");
      setTimeout(() => {
        mystery[3].classList.remove("active");
        mystery[4].classList.add("active");
      }, 5000);
    }, 3000);
    updateMysteries();
    updateDisplay();
  }

  // FIFTH DECADES
  if (beads === 41) {
    fifth1.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 42) {
    fifth2.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 43) {
    fifth3.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 44) {
    fifth4.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 45) {
    fifth5.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 46) {
    fifth6.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 47) {
    fifth7.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 48) {
    fifth8.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 49) {
    fifth9.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose()
  }
  if (beads === 50) {
    fifth10.setAttribute("fill", "#f677f6");
    sendRose();
    getRandomRoses();
    fadeOutRose();
          runningBeads();
          theHolyRosaryActive();
          theRosaryString();
          theHolyCrucifixActive();
    setTimeout(() => {
      joyActive.DeactivateActiveJoy();
      lightActive.DeactivateLight();
      sorrowActive.DeactivateSorrow();
      gloriousActive.DeactivateGlorious();
      fifthBigDecade.setAttribute("fill", "white");
      const count = 950,
        defaults = {
          origin: { y: -0.5 },
        };

        function fire(particleRatio, opts) {
          confetti(
            Object.assign({}, defaults, opts, {
              particleCount: Math.floor(count * particleRatio),
            })
          );
        }

        fire(0.45, {
          spread: 260,
          startVelocity: -0.5,
        });

        fire(0.7, {
          spread: 310,
        });

        fire(0.5, {
          spread: 120,
          decay: 0.2,
          scalar: 0.5,
        });

        fire(0.4, {
          spread: 320,
          startVelocity: 15,
          decay: 0.62,
          scalar: -0.2,
        });

        fire(0.2, {
          spread: 250,
          startVelocity: 5,
        });
      
    });

    setTimeout(() => {
      sendBunch();
      getRandomBunch();
      bunchRemove();
      theHolyCrucifixRemove();
      theRosaryStringRemove();
      theHolyRosaryRemove();
      runningBeadsRemove();
    }, 3000)
  };
    localStorage.setItem("beadsStored", beads);
    localStorage.setItem("decadesStored", decades);
    localStorage.setItem("rosariesStored", rosaries);
  }

  if (joyfulBtn.addEventListener('click', () => {
    mystery[0].classList.add("active");
    updateMysteries();
  }));
  if (lightBtn.addEventListener('click', () => {
    mystery[0].classList.add("active");
    updateMysteries();
  }));
  if (sorrowfulBtn.addEventListener('click', () => {
    mystery[0].classList.add("active");
    updateMysteries();
  }));
  if (gloriousBtn.addEventListener('click', () => {
    mystery[0].classList.add("active");
    updateMysteries();
  }));

  // NEXT BUTTON
  nextBtn.addEventListener("click", function () {
    incrementCount();
    if (beads === 51) {
      beads = 0;
      ResetBeads();
    }
    updateDisplay();

    if (beads === 50) {
      setTimeout(() => {
        mystery[4].classList.remove("active");
        mystery[3].classList.remove("active");
        mystery[2].classList.remove("active");
        mystery[1].classList.remove("active");
        mystery[0].classList.remove("active");
        beads = 0;
        decades = 0;
        ResetBeads();
        updateDisplay();
      }, 15000);
    }
  });

  resetBtn.addEventListener("click", () => {
    beads = 0;
    decades = 0;
    rosaries = 0;
    joyActive.DeactivateActiveJoy();
    lightActive.DeactivateLight();
    sorrowActive.DeactivateSorrow();
    gloriousActive.DeactivateGlorious();
    ResetBeads();
    updateMysteries();
    fadeOutRose();
    bunchRemove();
    updateDisplay();
  });


