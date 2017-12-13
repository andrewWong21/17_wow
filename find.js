var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var dist = Math.sqrt((x1-x0)**2 + (y1-y0)**2) / 5;
    
    if (dist > 100){
       dist = 50;
    }
    else if (dist < 5){
        dist = 5;
    }
    else if (dist < 100){
        return dist / 2;
    };
    return dist;
};


var findIt = function(e) {
    var mouseDist = distance(e.clientX, e.clientY, targetX, targetY);
    var lightness = 90 - mouseDist;
    box.style.backgroundColor = 'hsl(25,100%,' + lightness + '%)';
    console.log("dist: " + mouseDist);    
    console.log("L: " + lightness);
    };

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);

