const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

// console.log(triggers);
function highlightLink() {
  // console.log(this);
  const linkCords = this.getBoundingClientRect();
  console.log(linkCords);

  //transition is an issue after scrolling down
  //Math which i need to research more on, Specially with ScrollY and scrollX
  const cords = {
    width: linkCords.width,
    height: linkCords.height,
    top: linkCords.top + window.scrollY,
    left: linkCords.left + window.scrollX,
  }

  highlight.style.width = `${cords.width}px`;
  highlight.style.height = `${cords.height}px`;
  highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
