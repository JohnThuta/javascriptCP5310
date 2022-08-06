<!DOCTYPE html>
<!-- THANKS TO: free images.com/ ,  -->

<html lang="en" xmlns="">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <head>
    <title>Page Title</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>

<body>
<header>

    <h1>
        <p id="myUni">PAGE NOT FOUND</p>
    </h1>

    <script>
        let bannerID = 0;

        function text(msg,ctrlwidth) {
        msg = "NOTHING IN HERE         " + msg
        let newMsg = msg
        while (newMsg.length < ctrlwidth) {
        newMsg += msg
    }
        document.write ('<FORM NAME="Scrolltext" >');
        document.write ('<INPUT NAME="text" VALUE= "'+newMsg+'" SIZE= '+ctrlwidth+' >');
        document.write ('</FORM>');
        /*const bannerID = null;*/
        rollMsg()
    }
        function rollMsg() {
        let NowMsg = document.Scrolltext.text.value
        NowMsg = NowMsg.substring(1,NowMsg.length)+NowMsg.substring(0,1)
        document.Scrolltext.text.value = NowMsg
        bannerID = setTimeout("rollMsg()",100)//change the number 100 to represent the speed of the scroll. The larger the number the slower it moves
    }
    </script>
    <script>
        myMsg = "          We are -SORRY- ";
        msg = myMsg;
        ctrlwidth = "234" //change this number to the length you would like the message box to be
        text(msg,ctrlwidth);
    </script>
</header>

<section>
    <article>

        <div>

            <canvas id="myCanvas" width="800" height="300" ></canvas>
        </div>
        <aside>
            <!-- BUTTONS -->
            <section>
                <form action="../">
                    <button class="center" onclick="demo(0,0,0,0)" type="button">
                        PLAY
                    </button>
                    <button type="submit">
                        Home
                    </button>
                </form>
            </section>
        </aside>
    </article>
</section>
<footer>    </footer>
</body>
<!-- Draw the shark -->
<script>
    /**
    * I still have to fix the coordinates or rather I have to rewrite the functions in such a way as to take into
    * account the real coordinates. At present the code is too large and must and can be streamlined.
    * Remember to put shark2.jpg in the same folder.
    * @type {boolean}
    */
    let running = false;
    let pixelsX = 0;
    let pixelsY = 0;
    let speed = 100;
    let newX = 337; //400
    let newY = 70;  // 80
    let newH = 0;
    let newV = 0;
    let minX = 342; //405
    let minY = -115; // -100
    let maxX = 342; //280
    let maxY = 275; //299
    let speedStart = 10;
    let stopFunc = [];
    let timeOut = [];

    const positions = [7,100,27,120,57,170,97,170,107,160,117,170,197,160,227,140,227,90,267,120,
    297,160,397,180,417,175,467,170,497,170,487,180,487,190,477,180,472,195,467,185,
    462,197,457,188,452,199,447,189,442,201,437,190,432,203,427,191,422,205,417,207,
    412,207,407,209,397,210,412,215,422,225,427,215,432,235,437,220,442,235,447,225,
    452,242,457,242,462,235,467,250,367,245,297,260,257,370,247,260,197,250,167,280,
    177,250,127,240,107,250,97,240,97,230,57,210,17,260,27,200,7,100
    ];

    //const extraPositions = [297,180,287,230,307,180,297,230,317,180,307,230,27,150,37,160,
    //47,180,37,185,47,200,32,230,272,270,262,330
    //];
    const sharkEyePosition = [400,195];

    function moveUp(x,y,h,v) {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* ANIMATION */
    drawRunning(newX, newY, newH, newV);
    newX = x;
    newY = y;
    newH = h;
    newV = v;
    let distance = 0;
    let timer = setInterval(function () {
    distance -= 4;
    y += distance;
    if (y <= minY) {
    clearInterval(timer);
} else {
    context.clearRect(0, 0, 1180, 650);
    drawRunning(newX, newY, newH, newV);
    newY = y+distance;
}
}, speedStart);
    drawRunning(x, y, h, v);
    running = false;
}

    function moveLeft(x,y,h,v) {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* ANIMATION */
    drawRunning(newX, newY, newH, newV);
    newX = x;
    newY = y;
    newH = h;
    newV = v;
    let distance = 0;
    let timer = setInterval(function () {
    distance += 4;
    if (distance >= minX) {
    clearInterval(timer);
} else {
    context.clearRect(0, 0, 1180, 650);
    drawRunning(newX, newY, newH, newV);
    newX = x-distance;
}
}, speedStart);
    drawRunning(newX, newY, newH, newV);
    running = false;
}

    function myReload() {
    /* Speed alert */
    let val = confirm("Do we restart the application ?");
    if (val === true) {
    window.location.reload();
}
}

    function myStop() {
    mNoColor();
    for (let i in stopFunc) {
    clearTimeout(stopFunc[i]);
}
    running=false;
    //let myCanvas = document.getElementById("myCanvas");
    //let context = myCanvas.getContext("2d");
    //context.clearRect(0, 0, 1180, 650);
    /* Some variables */
    newX = 337; //400
    newY = 70;  // 80
    newH = 0;
    newV = 0;
    minX = 342; //405
    minY = -115;
    maxX = 342; //280
    maxY = 275;
}

    function myClear() {
    mNoColor();
    for (let i in stopFunc) {
    clearTimeout(stopFunc[i]);
}
    running=false;
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* Some variables */
    newX = 337; //400
    newY = 70;  // 80
    newH = 0;
    newV = 0;
    minX = 342; //405
    minY = -115;
    maxX = 342; //280
    maxY = 275;
}

    function moveRight(x,y,h,v) {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* ANIMATION */
    newX = x;
    newY = y;
    newH = h;
    newV = v;
    drawRunning(newX, newY, newH, newV);

    let distance = 0;
    let timer = setInterval(function () {
    distance+=4;
    if (distance >= maxX) {
    clearInterval(timer);
} else {
    context.clearRect(0, 0, 1180, 650);
    drawRunning(newX, newY, newH, newV);
    newX = x+distance;
}
}, speedStart);
    drawRunning(newX, newY, newH, newV);
    running = false;
}

    function moveDown(x,y,h,v) {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* ANIMATION */
    drawRunning(newX, newY, newH, newV);
    newX = x;
    newY = y;
    newH = h;
    newV = v;
    let distance = 0;
    let timer = setInterval(function () {
    distance -= 4 ;
    y = y-distance ;
    if (y >= maxY) {
    clearInterval(timer);
} else {
    context.clearRect(0, 0, 1180, 650);
    drawRunning(newX, newY, newH, newV);
    newY = y-distance;
}
}, speedStart);
    drawRunning(newX, newY, newH, newV);
    running = false;
}

    function center() {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    myClear();
    mColor();
    drawRunning(newX,newY,newH,newV);
}

    function drawRunning(x,y,h,v) {
    /* Running check */
    if (running === true) {
    return;
} else {
    running = true;
}
    running = true;
    mColor();
    /* Some variables */
    let pixelsMr = pixelsX ;
    let pixelsMy = pixelsY ;
    /*newX = 400;
    newY = 80;
    newH = 0;
    newV = 0;*/
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    /* Shark eye position */
    context.beginPath();
    context.moveTo(sharkEyePosition[0]+x+h+v+pixelsMr,sharkEyePosition[1]+y+v+pixelsMy);
    context.arc(sharkEyePosition[0]+x+h+v+pixelsMr, sharkEyePosition[1]+y+v+pixelsMy, 7, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    /* Shark Body */
    const gradient = context.createLinearGradient(0,0,800,800);
    gradient.addColorStop(0, 'yellow');
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(1, 'blue');


    context.lineWidth=5;
    context.beginPath();
    context.moveTo(positions[0] + x + h + pixelsMr, positions[1] + y + v + pixelsMy);
    for (let i=0; i<positions.length; i+=2) {
    context.lineTo(positions[i] + x+ h + pixelsMr, positions[i+1]+y + v + pixelsMy);
}
    context.strokeStyle = gradient;
    context.stroke();
    running = false;
}

    function draw(x,y,h,v) {

    stopFunc = [];
    mColorReturn();
    mColorDraw();
    //myClear();
    /* Running check */
    if (running === true) {
    return;
}
    running = true;
    /* Some variables */
    let pixelsMr = pixelsX ;
    let pixelsMy = pixelsY ;
    /* Speed alert */
    let val = confirm("The drawing speed has been increased to 0.1 Sec -SORRY- to speed down press CANCEL");
    if (val !== true) {
    speed = 1000;
}
    /* CANVAS */
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, 1180, 650);
    let counter = 0;
    /* ............ START-DRAWING ................. */
    for (let i=0; i<positions.length; i+=2) {
    let x0 = 0;
    let y0 = 0;
    let x1 = 0;
    let y1 = 0;
    if(i<=115) {
    x0 = positions[i];
    y0 = positions[i+1];
    x1 = positions[i+2];
    y1 = positions[i+3];
}
    /* Shark eye position */
    context.beginPath();
    context.moveTo(sharkEyePosition[0]+x+h+v+pixelsMr,sharkEyePosition[1]+y+v+pixelsMy);
    context.arc(sharkEyePosition[0]+x+h+v+pixelsMr, sharkEyePosition[1]+y+v+pixelsMy, 7, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.stroke();
    /* Dots positions */
    context.beginPath();
    context.arc(positions[i]+x+h+v+pixelsMr, positions[i+1]+y+v+pixelsMy, 7, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
    context.stroke();
    /* START-WAITING */
    stopFunc.push(setTimeout(function (){
    counter+=1;
    running = true;
    /* Shark body */
    context.beginPath();
    context.moveTo(positions[i],positions[i+1]);
    context.lineTo(positions[i+2],positions[i+3]);
    context.lineWidth=7;
    const gradient = context.createLinearGradient(x0,y0,x1,y1);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(1, 'yellow');
    context.strokeStyle=gradient;
    context.stroke();
    if (counter === 59) {
    running = false;
    const colorStart = document.getElementsByClassName("start");
    for (let i=0; i<colorStart.length; i++) {
    colorStart[i].style.background = "#cfd8dc";
}
}
}, i*speed)); // 3000 ms to slow
}
}

    function mColorDraw() {
    const colorStart = document.getElementsByClassName("start");
    for (let i=0; i<colorStart.length; i++) {
    colorStart[i].style.background = "#63bce0";
}
}

    function mColor() {
    const colorUp = document.getElementsByClassName("up");
    const colorMiddle = document.getElementsByClassName("middle");
    const colorDown = document.getElementsByClassName("down");
    const colorCenter = document.getElementsByClassName("center");
    for (let i=0; i<colorUp.length; i++) {
    colorUp[i].style.background = "#63bce0";
}
    for (let i=0; i<colorMiddle.length; i++) {
    colorMiddle[i].style.background = "#63bce0";
}
    for (let i=0; i<colorDown.length; i++) {
    colorDown[i].style.background = "#63bce0";
}
    for (let i=0; i<colorCenter.length; i++) {
    colorCenter[i].style.background = "#63bce0";
}
}

    function mColorReturn() {
    const colorUp = document.getElementsByClassName("up");
    const colorMiddle = document.getElementsByClassName("middle");
    const colorDown = document.getElementsByClassName("down");
    const colorCenter = document.getElementsByClassName("center");
    for (let i=0; i<colorUp.length; i++) {
    colorUp[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorMiddle.length; i++) {
    colorMiddle[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorDown.length; i++) {
    colorDown[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorCenter.length; i++) {
    colorCenter[i].style.background = "#cfd8dc";
}
}

    function mNoColor() {
    const colorStart = document.getElementsByClassName("start");
    const colorUp = document.getElementsByClassName("up");
    const colorMiddle = document.getElementsByClassName("middle");
    const colorDown = document.getElementsByClassName("down");
    const colorCenter = document.getElementsByClassName("center");
    for (let i=0; i<colorStart.length; i++) {
    colorStart[i].style.background = "#cfd8dc";
}

    for (let i=0; i<colorUp.length; i++) {
    colorUp[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorMiddle.length; i++) {
    colorMiddle[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorDown.length; i++) {
    colorDown[i].style.background = "#cfd8dc";
}
    for (let i=0; i<colorCenter.length; i++) {
    colorCenter[i].style.background = "#cfd8dc";
}
}

    function demo(x,y,h,v) {
    myClear();
    timeOut = [];
    newX = x;
    newY = y;
    newH = h;
    newV = v;
    let counter = 0;
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(0,0,0,0);
    clearTimeout(timeOut);
},800));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveDown(newX,newV,newH,newV);
    clearTimeout(timeOut);
},1100));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},1300));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveUp(newX,newV,newH,newV);
    clearTimeout(timeOut);
},2100));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},2100));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},2500));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},2800));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},3000));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(newX,newV,newH,newV);
    clearTimeout(timeOut);
},3300));
    timeOut.push(setTimeout(function (){
    counter +=1;
    moveRight(0,0,0,0);
    clearTimeout(timeOut);
},5000));
    timeOut.push(setTimeout(function (){
    counter +=1;
    center(newX,newV,newH,newV);
    clearTimeout(timeOut);
},5200));
    timeOut.push(setTimeout(function (){
    if (counter === 11) {
    alert("NOTHING AGAIN");
    window.location.reload();
}
    clearTimeout(timeOut);
},6200));

}
</script>
</html>