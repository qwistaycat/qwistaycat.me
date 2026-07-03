// import Clarity from '@microsoft/clarity';
// const projectId = "xewy12j17q"
// Clarity.init(projectId);

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu_dark");
let menuOpen = false;
let toggledManually = false;

function setMenuVisibility(visible) {
  menu.style.opacity = visible ? "85%" : "0%";
  menu.style.pointerEvents = visible ? "auto" : "none";
  menuOpen = visible;
}

const MOBILE_BREAKPOINT = 767;
const SCROLL_THRESHOLD = 50;

// Add scroll handler for mobile
function handleScroll() {
  if (window.innerWidth <= MOBILE_BREAKPOINT && !toggledManually) {
    // Mobile breakpoint
    setMenuVisibility(window.scrollY > SCROLL_THRESHOLD);
  }
}

menuIcon.addEventListener("click", () => {
  toggledManually = true;
  setMenuVisibility(!menuOpen);
});

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Add resize event listener to handle orientation changes
window.addEventListener("resize", handleScroll);
