const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees= ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const mins = now.getMinutes();
    const minDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
//  console.log("hii!")
}

setInterval(setDate, 1000);
