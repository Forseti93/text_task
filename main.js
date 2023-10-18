// TODO: change context on after element
// hard way: to customise Document: styleSheets property
const span = document.querySelector(".dynamic_after");
const input = document.querySelector(".set_after");

input.addEventListener("input", (e) => {
  const inpVal = e.target.value;
  span.setAttribute("data-after", inpVal);
  console.log(inpVal);
});

// TODO: +animate video
// - FIX: to make calculations every 100ms, not 1ms
const startTimeout = () => {
  canCalculate = false;
  const makeCalculations = setTimeout(() => {
    canCalculate = true;
    console.log("timeout fired");
  }, calculationPause);
};
let canCalculate = true;
const calculationPause = 100;
// ENDFIX

const imgMoveCoef = 50;
const orbitWrapper = document.querySelector(".wrapper");
document.addEventListener("mousemove", (e) => {
  if (!canCalculate) return; // for debounce
  const x = e.clientX / imgMoveCoef;
  const y = e.clientY / imgMoveCoef;
  orbitWrapper.style.transform = `translate(${x}px, ${y}px)`;

  if (typeof makeCalculations === "undefined") startTimeout(); //for debounce
  console.log("calculations"); //for debounce
});

/* const cutToMainDomain = (URL) => {
  // find index of first "/"
  // cut URL to then index
};

const deleteExternalLinks = () => {
  // get URL of current string
  const currentURl = window.location.href;
  //   file:///C:/Users/serge/Documents/0%20WEB/_Learn/1/index.html
  //   file:///C:/
  const mainDomain = "https://maindomain";
  //   console.dir(window);
  // get all links
  const allLinks = document.querySelectorAll("a");
  console.log("currentURl: ", currentURl);
  console.log("allLinks: ", allLinks);
  // compare URL with link's href attribute
  allLinks.map((link) => {
    //  delete link element from dom
    if (cutToMainDomain(link.getAttribute("href")) !== mainDomain) {
      link.remove();
    }
  });
};
deleteExternalLinks(); */
