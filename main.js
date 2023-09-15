Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});
camera = document.getElementById("camera");

Webcam.attach('#camera')
function capture_image(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML =  '<img id="captured_image" src="'+data_uri+'"/>';
    
  });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BaWoBcmb2/model.json",Model_loaded);

function Model_loaded(){
console.log('Model Loaded')
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult)
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the gesture is" + prediction_1;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error,result){
    if(error){
      console.error(error);  
    }
    else{
        console.log(result);
        document.getElementById("Text").innerHTML=result[0].label;
        prediction_1=result[0].label;
        speak();
        if(result[0].label == "Nice"){
          document.getElementById("Icon").innerHTML="&#128076;";
        }
        if(result[0].label == "Good"){
            document.getElementById("Icon").innerHTML="&#128077;";

          }
          if(result[0].label == "Rock"){
            document.getElementById("Icon").innerHTML="&#129304;";
            
          }
    
    }
}