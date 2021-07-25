Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

 function snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("output").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
     });
 }
 console.log("ml5 version:", ml5.version);
 classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pl85M8Ac6/model.json", modelLoaded);

 function modelLoaded(){
     console.log("modelLoaded");
 }