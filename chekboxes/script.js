const checkboxes = document.querySelectorAll('.inbox input[type ="checkbox"]');
// console.log(checkboxes);
let lastChecked;

function handleClick(e) {
  let inBetween = false;
  // console.log(e);
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inBetween!')
      }
      
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach((checkboxes) =>
  checkboxes.addEventListener("click", handleClick)
);
