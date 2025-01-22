const timeNodes = [...document.querySelectorAll("[data-time]")];

//overall seconds of all the videos
const seconds = timeNodes
  //dataset.time comes from data-time
  .map((node) => node.dataset.time)
  //parsefloat makes string in a number
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  //reduce method reduces the array to a single value
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft /3600);
secondsLeft %= 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(timeNodes);
console.log(seconds);
console.log(hours, minutes, secondsLeft);
