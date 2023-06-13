Webcam.set({
    width: 350,
    height: 350, 
    image_format: 'jpg', 
    jpg_quality: 100 
})
Webcam.attach('#camera') ;
function capture() {
    Webcam.snap(function (data_uri){
        document.getElementById('set').innerHTML='<img src="' + data_uri + '" id="image_captured"/>';
    }) ;
}
console.log('ml5',ml5.version) ;
teachablemachine = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/M7myJEc-w/model.json",model_Uploaded);
function model_Uploaded(){
    console.log ("Your model is uploaded") ;
}

function check() {
    image_captured = document.getElementById("image_captured") ; 
    teachablemachine.classify(image_captured, got_result) ;
}
function got_result(error,result){
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        document.getElementById("empty1").innerHTML = result[0].label ;
        document.getElementById("empty1").innerHTML = result[1].label ; ;
    }
}