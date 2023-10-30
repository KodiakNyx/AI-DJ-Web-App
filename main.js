song1 = "";
song2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function draw() {
    image(video, 0, 0, 650, 550);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY);

        rightwristX = results[0].pose.rightwrist.x;
        rightwristY = results[0].pose.rightwrist.y;
        console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY);
    }
}