x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data="";
to_number="";
draw_apple = "";
statusvar="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
apple = loadImage("apple.png")    
}

function startfunc()
{
console.log("start()");
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
    draw();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number = Number(content);
if(content=="Apple"||"apple") {
    statusvar="started drawing apple";
    draw_apple = "set";
} else {
    statusvar = "the speech has not recognized a number";
}
}

function setup() {
 screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    console.log(screen_width + " " + screen_height);
 canvas = createCanvas(screen_width-300, screen_height-150);
canvas.position(150,120)
    startfunc();
}

function draw() {
  if(draw_apple == "set")
  {
   for(var i = 1; i<= to_number; i++){
    x = Math.floor(Math.random() * 1204);
       y = Math.floor(Math.random() * 734);
       console.log(apple);
    image(apple, x, y, 50, 50);
   }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
