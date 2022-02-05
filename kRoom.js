modelstatus = "";

function preload() {
    kidroom = loadImage("kRoom.jpg");
}

function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center();
    COCOmodel = ml5.objectDetector("cocossd", modelhasloaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
}

function modelhasloaded() {
    modelstatus = true;
    COCOmodel.detect(kidroom, getResults);
}

function getResults(errorarray, resultsarray) {
    if (errorarray) {
        console.error(errorarray);
    } else {
        console.log(resultsarray);
    }
}


function draw() {
    image(kidroom, 0, 0, 700, 440);
    fill("black");
    text("Guitar", 180, 170);
    stroke("black");
    noFill();
    rect(170, 150, 90, 200);

}