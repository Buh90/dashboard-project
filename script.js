const themeButton = document.querySelector("#slider");
const bodyAttribute = document.querySelector("body");
themeButton.addEventListener("change", changeTheme);

function changeTheme() {
  if (bodyAttribute.getAttribute("theme") === "light") {
    bodyAttribute.setAttribute("theme", "dark");
  } else {
    bodyAttribute.setAttribute("theme", "light");
  }
}
