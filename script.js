//Getting the reference of Object
    var object = document.getElementById('object');


// Counting the starting Time
    var sTime =  new Date().getTime();
    var startTime =  (sTime/1000).toFixed(3);


// Generating 6 Digit Color Code
    function getRandomColor(){
        var hexaDigits  = '0123456789ABCDEF';
        var color = '#';
        var i;
        for( i=0; i<6; i++){
            color += hexaDigits[Math.floor(Math.random()*16)];
        }
        return color;
    }



// Generating Object Randomely 

    function generateObject(){
        var top;
        var left;
        var wh;
        left= Math.random()*400 + "px";
        top= Math.random()*200 + "px";
        object.style.left = left;
        object.style.top = top;
        wh = Math.floor(Math.random()*50) + 100 + "px";
        object.style.height = wh;
        object.style.width = wh;
        object.style.backgroundColor = getRandomColor();
    }



//Object click event to measure reaction time

object.onclick = function(){
    var eTime =  new Date().getTime(); // Getting Current clicking time slot
    var EndTime =  (eTime/1000).toFixed(3); 
    var reactionTime = (EndTime - startTime).toFixed(2);
    document.getElementById('reactionTime').innerHTML = "Reaction Time : " + reactionTime + "Seconds"; 
    object.style.position = 'relative';
    object.style.display ='flex';
    sTime =  new Date().getTime(); 
    startTime =  (sTime/1000).toFixed(3);
    generateObject();
}
















