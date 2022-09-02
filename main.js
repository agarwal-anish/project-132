status = "";
img="";

function preload(){
    img = loadImage('Ipad and Phone 2.0.jpg');
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded (){
    console.log(" model Loaded ");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult (results, error){
if (error){
    console.log(error);
}
console.log(results);
}



function draw (){
image(img, 0, 0, 640, 420);

fill("#ff0000");
noFill();
text("ipad", 45, 25);
stroke("#ff0000");
rect(30, 10, 380, 700);


fill("#ff0000");
noFill();
text("iphone", 410, 120);
stroke("#ff0000");
rect(390, 90, 220, 320);
}

