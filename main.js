song1="";
song2="";
leftWristx= 0;
leftWristy= 0;
rightWristx= 0;
rightWristy = 0;

function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotposes);
}

function modelLoaded(){
	console.log("Pose is Initialized");
}

function gotposes(results){
	if(results.length > 0)
	{
		console.log(results);
		leftWristx = results[0].pose.leftWrist.x;
		leftWristy = results[0].pose.leftWrist.y;
		console.log("the x coordinates of the leftWrist is "+ leftWristx + " the Y coordinates of the leftWrist is "+ leftWristy);
		
		rightWristx =results[0].pose.rightWrist.x;
		rightWristy = results[0].pose.rightWrist.y;
		console.log("the x coordinates of the rightWrist is "+ rightWristx + " the Y coordinates of the rightWrist is "+ rightWristy)
	}
}

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw()
{
    image(video, 0, 0, 400,400);
}

function play()
{
    song1.play();
    song1.volume(1);
	song1.rate(1);
}