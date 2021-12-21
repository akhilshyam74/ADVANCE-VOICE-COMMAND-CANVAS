x = 0;
y = 0;
var number = 0;
var apple = ""
var z = ""
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function preload(){
    apple = loadImage("apple.jpg");
}
function start(){
    document.getElementById("status").innerHTML = "System is listing please speak";
    recognition.start();
}
    recognition.onresult = function(event){
        console.log(event);
        var content = event.results[0][0].transcript;
        document.getElementById("status").innerHTML = "The Speech has been recognized as "+ content;
        number = Number(content);
        console.log(Number(content))
        if(Number.isInteger(number)){
            console.log("Number is interger");
            document.getElementById("status").innerHTML = "Started drawing apples";
            console.log("Started drawing apples");
            z = "set";
        }
        else{
            console.log("Number is not interger");
            document.getElementById("status").innerHTML = "Number is not identified";
            console.log("Number is not identified");
        }
        }
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(z == "set"){
        for(var i = 1; i<=number;i++){
            x = Math.floor(Math.random()*900);
            y = Math.floor(Math.random()*600);
            image(apple, x, y, 50,  60);
            z = "not set";
    }
    }
    document.getElementById("status").innerHTML = number + " apples are draws";
}