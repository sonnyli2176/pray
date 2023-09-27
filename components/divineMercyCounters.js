import {
  firstBigDecade,
  secondBigDecade,
  thirdBigDecade,
  fourthBigDecade,
  fifthBigDecade,
  apostleCreed,
  gloryBe,
} from "./divineMercyBeads.js";
import {
  first1,
  first2,
  first3,
  first4,
  first5,
  first6,
  first7,
  first8,
  first9,
  first10,
} from "./divineMercyBeads.js";

import {
  second1,
  second2,
  second3,
  second4,
  second5,
  second6,
  second7,
  second8,
  second9,
  second10,
} from "./divineMercyBeads.js";

import {
  third1,
  third2,
  third3,
  third4,
  third5,
  third6,
  third7,
  third8,
  third9,
  third10,
} from "./divineMercyBeads.js";

import {
  fourth1,
  fourth2,
  fourth3,
  fourth4,
  fourth5,
  fourth6,
  fourth7,
  fourth8,
  fourth9,
  fourth10,
} from "./divineMercyBeads.js";

import {
  fifth1,
  fifth2,
  fifth3,
  fifth4,
  fifth5,
  fifth6,
  fifth7,
  fifth8,
  fifth9,
  fifth10,
} from "./divineMercyBeads.js";

// THE DIVINE CHAPLET SECTION
const chapletDivineMercy = document.getElementById("chaplet_svg");// the Chaplet itself
const chapletsBeads = document.getElementById("chapletBeads");// the Chaplet Beads
const cross360 = document.getElementById("cross360");
const fbIcon = document.querySelector(".fb");

// ------------------------------------------------------------
// BUTTONS COUNT
const nextBtn = document.getElementById("beads-plus");
const resetBtn = document.getElementById("reset-btn");
const mysteriesMessage = document.querySelector(".pop_up_msg");
const counterContainer = document.querySelector(
  "#counters-and-buttons-container"
);
// Mysteries Buttons Selection
const divineMercyBtn = document.querySelector(".lets_pray_btn");

// BUTTONS COUNT
const beadsDisplay = document.getElementById("beads");
const decadesDisplay = document.getElementById("decades");
const chapletsDisplay = document.getElementById("chaplets");
let beadsStored = localStorage.getItem("beadsStored");
let decadesStored = localStorage.getItem("decadesStored");
let chapletsBeadStored = localStorage.getItem("chapletsBeadStored");

let beads = beadsStored ? parseInt(beadsStored) : 0;
let decades = decadesStored ? parseInt(decadesStored) : 0;
let chaplets = chapletsBeadStored ? parseInt(chapletsBeadStored) : 0;

let thePassion_Active = document.querySelector(".thePassion_Active");
let theEternalFather_Active = document.querySelector(".EternalFather_Active");
let theHolyGod_Active = document.querySelector(".theHolyGod_Active");
let chaplet = document.getElementById("chaplet_svg");


// Update display
function updateDisplay() {
  beadsDisplay.innerText = beads;
  decadesDisplay.innerText = decades;
  chapletsDisplay.innerText = chaplets;
}

// const links = document.getElementsByTagName("a");
const buttons = document.querySelectorAll("button");
const audio = new Audio("./sound/click.mp3");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     audio.play();
//   });
// });

// const browserMessage = document.getElementById("chromeBrowser");
//  let ba = ['Chrome','Firefox','Safari','Opera','Edg' || 'Edge'];
// let b, ua = navigator.userAgent;

// for (let i = 0; i < ba.length; i++) {
//   if (ua.indexOf(ba[i]) > -1) {
//     b = ba[i];
//     browserMessage.classList.add("active");
//     return c(browserMessage);

//   } if(b === 'Chrome') {
//     return browserMessage.classList.remove("active");
//   }
// }

// clearTimeout(ua);
// ua = setTimeout(() => {
//   browserMessage.classList.remove("active");
// }, 6000);


// divineMercyBtn.addEventListener("click", () => {
    // counterContainer.classList.toggle("active");
    // chapletDivineMercy.classList.toggle("active");
//   theEternalFather_Active.classList.toggle("active");
//   });

divineMercyBtn.addEventListener('click', () => {
  counterContainer.classList.toggle("active");
  chapletDivineMercy.classList.toggle("active");
  theEternalFather_Active.classList.toggle("active");
  resetCounters()
  updateDisplay();
});



function removeChapletsCounters() {
    counterContainer.classList.remove("active");
    chapletDivineMercy.classList.remove("active");
  }


function resetPrayers() {
  if (
    divineMercyBtn.addEventListener('click', () => {
      theEternalFather_Active.classList.remove("active");
      thePassion_Active.classList.remove("active");
      theHolyGod_Active.classList.remove("active");

  })  
);
}


  // RESET BEADS COLOUR
  function ResetBeads() {
    const circleElements = document.getElementsByTagName("circle");
    for (let i = 0; i < circleElements.length; i++) {
      const circleEl = circleElements[i];
      // Set the initial fill color of the circle element and store the original fill color
      circleEl.setAttribute("fill", "#7abbde");
      circleEl.setAttribute("data-original-fill", "#7abbde");

      // Reset the Fill Attribute to previous state;
      if (circleEl.hasAttribute("data-original-fill")) {
        const originalFill = circleEl.getAttribute("data-original-fill");
        circleEl.setAttribute("fill", originalFill);
      }
    }
  }

  function resetEternalPassion() {
    theEternalFather_Active.classList.remove("active");
    thePassion_Active.classList.remove("active");
    theHolyGod_Active.classList.remove("active");
}
  
  function PassionPrayers() {
    thePassion_Active.classList.add("active");
  }

  function removePassionPrayers() {
      thePassion_Active.classList.remove("active");
  }

function EternalFather() {
  theEternalFather_Active.classList.add("active");
}
function deleteEternalPrayer() {
    theEternalFather_Active.classList.remove("active");
}

function activetheHolyGod() {
  theHolyGod_Active.classList.add("active");
}
function removeHolyGod() {
    theHolyGod_Active.classList.remove("active");
}

// Increment count
function incrementCount() {
  beads++;
  if (beads % 10 === 0) {
    decades++;
    if (decades === 5) {
      decades = 0;
      chaplets++;
    }
  }
  if (beads === 0) {
      removePassionPrayers()
    }
  if (beads === 1) {
    first1.setAttribute("fill", "rgb(58, 10, 10)");
          deleteEternalPrayer();
          PassionPrayers();     
  } else {
    nextBtn.addEventListener('click', () => {
      deleteEternalPrayer();
    })
  }
  
  if (beads === 2) {
    first2.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 3) {
    first3.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 4) {
    first4.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 5) {
    first5.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 6) {
    first6.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 7) {
    first7.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 8) {
    first8.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 9) {
    first9.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 10) {
    first10.setAttribute("fill", "rgb(58, 10, 10)");
    updateDisplay();
    setTimeout(() => {
      firstBigDecade.setAttribute("fill", "#a812ff");
      removePassionPrayers();
      EternalFather();
    }, 3000);
    
    setTimeout(() => {
      deleteEternalPrayer();
     PassionPrayers();
  }, 15000);
  }

  
  
  // Second Decades Count Change colours
  if (beads === 11) {
     second1.setAttribute("fill", "rgb(58, 10, 10)");
    }
    if (beads === 12) {
      second2.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 13) {
    second3.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 14) {
    second4.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 15) {
    second5.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 16) {
    second6.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 17) {
    second7.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 18) {
    second8.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 19) {
    second9.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 20) {
    second10.setAttribute("fill", "rgb(58, 10, 10)");
    updateDisplay();
        setTimeout(() => {
          secondBigDecade.setAttribute("fill", "#a812ff");
                removePassionPrayers();
                EternalFather();
        }, 3000);

    setTimeout(() => {
      deleteEternalPrayer();
      PassionPrayers();
    }, 15000);
  }
  
  // THIRD DECADES
  if (beads === 21) {
    third1.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 22) {
    third2.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 23) {
    third3.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 24) {
    third4.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 25) {
    third5.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 26) {
    third6.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 27) {
    third7.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 28) {
    third8.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 29) {
    third9.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 30) {
    third10.setAttribute("fill", "rgb(58, 10, 10)");
    updateDisplay();
        setTimeout(() => {
          thirdBigDecade.setAttribute("fill", "#a812ff");
                removePassionPrayers();
                EternalFather();
        }, 3000);
    
    setTimeout(() => {
      deleteEternalPrayer();
      PassionPrayers();
    }, 15000);
  }

  // FOURTH DECADES
  if (beads === 31) {
    fourth1.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 32) {
    fourth2.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 33) {
    fourth3.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 34) {
    fourth4.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 35) {
    fourth5.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 36) {
    fourth6.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 37) {
    fourth7.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 38) {
    fourth8.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 39) {
    fourth9.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 40) {
    fourth10.setAttribute("fill", "rgb(58, 10, 10)");
    updateDisplay();
        setTimeout(() => {
          fourthBigDecade.setAttribute("fill", "#a812ff");
            removePassionPrayers();
            EternalFather();
        }, 3000);
    
    setTimeout(() => {
      deleteEternalPrayer();
      PassionPrayers();
    }, 15000);
  }

  // FIFTH DECADES
  if (beads === 41) {
    fifth1.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 42) {
    fifth2.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 43) {
    fifth3.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 44) {
    fifth4.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 45) {
    fifth5.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 46) {
    fifth6.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 47) {
    fifth7.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 48) {
    fifth8.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 49) {
    fifth9.setAttribute("fill", "rgb(58, 10, 10)");
  }
  if (beads === 50) {
    fifth10.setAttribute("fill", "rgb(58, 10, 10)");
    setTimeout(() => {
      fifthBigDecade.setAttribute("fill", "#a812ff");
                  removePassionPrayers();
                  activetheHolyGod();
    
    }, 3000);

    setTimeout(() => {
        removePassionPrayers();
        removeHolyGod();
        ResetBeads();
        resetCounters();
        updateDisplay();
    }, 15000);

    localStorage.setItem("beadsStored", beads);
    localStorage.setItem("decadesStored", decades);
    localStorage.setItem("chapletsBeadStored", chaplets);

  }
  }

// NEXT BUTTON
nextBtn.addEventListener("click", function () {
  incrementCount();
    if (beads === 51) {
      beads = 0;
      ResetBeads();
      resetCounters();
    }
  updateDisplay();
})

resetBtn.addEventListener("click", () => {
  beads = 0;
  decades = 0;
  chaplets = 0;
  ResetBeads();
  resetEternalPassion();
  resetPrayers();
  updateDisplay();
});

function resetCounters() {
    beads = 0;
    decades = 0;
}
