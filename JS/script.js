const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo: "url('img/Personas/Jaime Campos.png')",
    name: "Jaime Campos",
    profession: "Gerente Financiero",
    description:
      "Desde mi afiliación con Asodatos he cambiado el horizonte de mis negocios. Ahora le puedo brindar a mis clientes una financiación rápida y sin tantos papeleos y lo mejor los tratan a ellos como si fuera YO"
  },

  {
    photo: "url('img/Personas/Jaime Campos.png')",
    name: "Jaime Campos",
    profession: "Gerente Financiero",
    description:
      "Desde mi afiliación con Asodatos he cambiado el horizonte de mis negocios. Ahora le puedo brindar a mis clientes una financiación rápida y sin tantos papeleos y lo mejor los tratan a ellos como si fuera YO"
  },

  {
    photo: "url('img/Personas/Jaime Campos.png')",
    name: "Jaime Campos",
    profession: "Gerente Financiero",
    description:
      "Desde mi afiliación con Asodatos he cambiado el horizonte de mis negocios. Ahora le puedo brindar a mis clientes una financiación rápida y sin tantos papeleos y lo mejor los tratan a ellos como si fuera YO"
  },
  {
    photo: "url('img/Personas/Jaime Campos.png')",
    name: "Jaime Campos",
    profession: "Gerente Financiero",
    description:
      "Desde mi afiliación con Asodatos he cambiado el horizonte de mis negocios. Ahora le puedo brindar a mis clientes una financiación rápida y sin tantos papeleos y lo mejor los tratan a ellos como si fuera YO"
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);



window.addEventListener("resize", () => {
  description.style.height = "100%";
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}