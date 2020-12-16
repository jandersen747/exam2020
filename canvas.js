function draw() {

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');

      for(var x=0.5;x<958;x+=10) {
        context.moveTo(x,0);
        context.lineTo(x,958);
      }

      for(var y=0.5; y<958; y+=10) {
        context.moveTo(0,y);
        context.lineTo(958,y);

    }

    context.strokeStyle='transparent';
    context.stroke();

}
}

background.onload = function(){
    ctx.drawImage(background,0,0);   
}

function showCoords(event) {
  var x = Math.floor((event.clientX - 10)/10);
  var y = Math.floor((event.clientY - 10)/10);
  var coords = "X coordinates: " + x + ", Y coordinates: " + y;
  document.getElementById('showCoords').innerHTML = coords;

}


function toggleNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
  x.style.display = "none";
  } else {
  x.style.display = "block";
      } }