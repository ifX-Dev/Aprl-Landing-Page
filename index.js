function anim() {
  document.getElementById("vid-txt").style.display = "flex";
  document.getElementById("vid-txt").style.flexDirection = "column";
  document.getElementById("vid-txt").style.justifyContent = "center";
  document.getElementById("vid-txt").style.alignItems = "center";
};
function anim_out() {
  document.getElementById("vid-txt").style.display = "none";
};
function men() {
  document.getElementById("men-img").style.transition = "all .3s";
  document.getElementById("men-img").style.transform = "rotate(-4deg)";
  document.getElementById("men-img").style.transformOrigin = "bottom left";
  document.getElementById("men-img").style.opacity = ".7";
  document.getElementById("men").style.transition = "all .3s";
  document.getElementById("men").style.transform = "rotate(-4deg)";
  document.getElementById("men").style.transformOrigin = "bottom left";
  document.getElementById("men").style.opacity = "1";
};
function men_out() {
  document.getElementById("men").style.opacity = "0";
  document.getElementById("men").style.transform = "rotate(0deg)";
  document.getElementById("men-img").style.opacity = "1";
  document.getElementById("men-img").style.transform = "rotate(0deg)";
};
function women() {
  document.getElementById("women-img").style.transition = "all .3s";
  document.getElementById("women-img").style.transform = "rotate(4deg)";
  document.getElementById("women-img").style.transformOrigin = "bottom right";
  document.getElementById("women-img").style.opacity = ".7";
  document.getElementById("women").style.transition = "all .3s";
  document.getElementById("women").style.transform = "rotate(4deg)";
  document.getElementById("women").style.transformOrigin = "bottom right";
  document.getElementById("women").style.opacity = "1";
};
function women_out() {
  document.getElementById("women").style.opacity = "0";
  document.getElementById("women").style.transform = "rotate(0deg)";
  document.getElementById("women-img").style.opacity = "1";
  document.getElementById("women-img").style.transform = "rotate(0deg)";
};
function jewellery() {
  document.getElementById("jewellery-img").style.transition = "all .3s";
  document.getElementById("jewellery-img").style.transform = "rotate(4deg)";
  document.getElementById("jewellery-img").style.transformOrigin = "top left";
  document.getElementById("jewellery-img").style.opacity = ".7";
  document.getElementById("jewellery").style.transition = "all .3s";
  document.getElementById("jewellery").style.transform = "rotate(4deg)";
  document.getElementById("jewellery").style.transformOrigin = "top left";
  document.getElementById("jewellery").style.opacity = "1";
};
function jewellery_out() {
  document.getElementById("jewellery").style.opacity = "0";
  document.getElementById("jewellery").style.transform = "rotate(0deg)";
  document.getElementById("jewellery-img").style.opacity = "1";
  document.getElementById("jewellery-img").style.transform = "rotate(0deg)";
};
function afro_fusion() {
  document.getElementById("afro-fusion-img").style.transition = "all .3s";
  document.getElementById("afro-fusion-img").style.transform = "rotate(-4deg)";
  document.getElementById("afro-fusion-img").style.transformOrigin =
    "top right";
  document.getElementById("afro-fusion-img").style.opacity = ".7";
  document.getElementById("afro-fusion").style.transition = "all .3s";
  document.getElementById("afro-fusion").style.transform = "rotate(-4deg)";
  document.getElementById("afro-fusion").style.transformOrigin = "top right";
  document.getElementById("afro-fusion").style.opacity = "1";
};
function afro_fusion_out() {
  document.getElementById("afro-fusion").style.opacity = "0";
  document.getElementById("afro-fusion").style.transform = "rotate(0deg)";
  document.getElementById("afro-fusion-img").style.opacity = "1";
  document.getElementById("afro-fusion-img").style.transform = "rotate(0deg)";
};

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
