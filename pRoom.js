modelstatus = "";

function preload() {
    parentroom = loadImage("pRoom.jpg");
}

function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center();
    COCOmodel = ml5.objectDetector("cocossd", modelhasloaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
}

function modelhasloaded() {
    modelstatus = true;
    COCOmodel.detect(parentroom, getResults);
}

function getResults(errorarray, resultsarray) {
    if (errorarray) {
        console.error(errorarray);
    } else {
        console.log(resultsarray);
    }
}

function draw() {
    image(parentroom, 0, 0, 700, 440);
    fill("orange");
    text("Bed", 110, 170);
    stroke("orange");
    noFill();
    rect(90, 150, 500, 200);

}