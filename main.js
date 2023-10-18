// TODO: change context on after element
// hard way: to customise Document: styleSheets property
const span = document.querySelector(".dynamic_after");
const input = document.querySelector(".set_after");

input.addEventListener("input", (e) => {
  const inpVal = e.target.value;
  span.setAttribute("data-after", inpVal);
  console.log(inpVal);
});

// TODO: animate video
const imgMoveCoef = 50;
const orbitWrapper = document.querySelector(".wrapper");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / imgMoveCoef;
  const y = e.clientY / imgMoveCoef;
  orbitWrapper.style.transform = `translate(${x}px, ${y}px)`;
  console.log(`translate(${x}, ${y})`);
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
