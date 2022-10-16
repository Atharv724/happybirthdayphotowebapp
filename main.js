function preload(){

}

function setup(){
    canvas = createCanvas(600, 380);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(300, 300);
    webcam.center();
    webcam.hide()
    
}

function draw(){
image(webcam, 0, 0, 600, 380)
}

function take_snapshot(){
    save('myimage.png');
}