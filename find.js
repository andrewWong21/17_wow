var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var targetX = boxWidth * Math.random();
var targetY = boxHeight * Math.random();


//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var dist = Math.sqrt((x1-x0)**2 + (y1-y0)**2);
    return dist;
};

var findIt = function(e) {
    var mouseDist = distance(e.clientX, e.clientY, targetX, targetY);
    var radius = distance(0,0, boxWidth, boxHeight);
    var ratio = mouseDist/radius;
    var lightness;
    
    if (ratio > 0.4){
        lightness = 50;
        box.style.backgroundColor = 'hsl(25,100%,' + lightness + '%)';
    } else if (ratio < 0.05) {
        box.style.backgroundColor = 'hsl(100, 100%, 85%)';
    } else {
        lightness = 90 - (ratio * 100);
        box.style.backgroundColor = 'hsl(25,100%,' + lightness + '%)';
    };
};

box.addEventListener("mousemove", findIt);

