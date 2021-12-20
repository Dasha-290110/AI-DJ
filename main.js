song="";
leftwristx=0;
leftwristy=0;

rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500,300);
    canvas.center();
     video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
if(results.lenght>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log('leftwrist x = '+ leftwristx+'   leftwrist y = '+ leftwristy);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log('rightwrist x = '+ rightwristx+'   rightwrist y = '+ rightwristy);
  
}
}

function draw(){
    image(video,0,0,500,300);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
