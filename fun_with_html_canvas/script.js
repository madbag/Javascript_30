const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle="#BADA55";
ctx.lineJoin="round";
ctx.lineCap="round";
ctx.lineWidth= 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // drawing stops
    console.log(e)

    ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`;
    // ctx.lineWidth= hue;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //ES6 style
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    hue++;
    console.log(hue);

    if(hue >= 360){
        hue=0;
    };

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction){
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

    console.log(direction)
    console.log(ctx.lineWidth)
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


