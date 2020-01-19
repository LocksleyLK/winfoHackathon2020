$(document).ready(function() {
    
      
    $("#trigger").click(function() {
        
        
        
    });
    
    $('#files').change(function(e) {
        console.log(e);
        var uploadedFile = e.target.files[0];
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://dementia-images.cognitiveservices.azure.com/customvision/v3.0/Prediction/a36062c2-98dc-4b46-aea3-08b35746e044/classify/iterations/Iteration3/image",
            "method": "POST",
            "headers": {
              "Prediction-Key": "c5054b10aafd488cadda95051cb94959",
              "Content-Type": "application/octet-stream",
              "Accept": "*/*",
              "Cache-Control": "no-cache",
              "Postman-Token": "3ac37eaa-c929-411e-98bb-46b99ee07e70,3b87bde8-8d6d-40ee-851f-1a533b23093a",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": uploadedFile
        }
        $.ajax(settings).done(function (response) {
            $("#demo").html(response.predictions[0].probability);
            console.log(response);
        });
    });
});
