 var canvas = document.querySelector("#c");
    var context = canvas.getContext("2d");
    canvas.width  = window.innerWidth;
    var canvasPos = getPosition(canvas);
    var mouseX = 0;
    var mouseY = 0;
    var stepCount = 0;  // current set num so left and right can be known

    canvas.addEventListener("mousemove", setMousePosition, false);

    function setMousePosition(e) {
      mouseX = e.clientX - canvasPos.x;
      mouseY = e.clientY - canvasPos.y;
    }

    var totalPositionsToStore = 20;
    var positions = [];
    var tempX = 0;
    var tempY = 0;
    function storeLastPositions(xPos, yPos) {
      // push an item
      positions.push({
        x: xPos,
        y: yPos
      });

      if (positions.length > totalPositionsToStore) {
        positions.shift();
      }
    }

    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      tempX = mouseX;
      tempY = mouseY;
      for (var i = 1; i < positions.length; i++) {
        if(Math.abs(tempX - positions[i].x)>30 || Math.abs(tempY - positions[i].y)>30){
          tempX = positions[i].x;
          tempY = positions[i].y;
          drawCircle(positions[i].x, positions[i].y, i / positions.length, Math.atan2(positions[i].y - positions[i-1].y, positions[i].x - positions[i-1].x), (stepCount++) % 2 === 0);
          //drawFoot(positions[i].x,positions[i].y,Math.atan2(positions[i].y - positions[i-1].y, positions[i].x - positions[i-1].x),(stepCount++) % 2 === 0);
        }
      }

      //drawCircle(mouseX, mouseY, "primary");
      storeLastPositions(mouseX, mouseY);

      requestAnimationFrame(update);
    }
    update();

    function drawCircle(x, y, a, dir, left) {
      var alpha;
      var scale;

    var xdx = Math.cos(dir) ;
    var xdy = Math.sin(dir) ;

      if (a == "primary") {
        // don't bother fading or scaling the trail "leader" :P
        alpha = 1;
        scale = 1;
      } else {
        // adjust the transparency and scale
        alpha = a ;
        scale = a;
      }


      context.save();
      if(left){
          context.setTransform(xdx, xdy, -xdy, xdx, x + xdy , y - xdx );
           // right foot needs to be mirrored
          //ctx.rotate(-0.1); // make the foot turn out a bit
      }else{
          context.setTransform(xdx, xdy, -xdy, xdx, x - xdy*25 , y + xdx*25 );
          //ctx.rotate(-0.1); // make the foot turn out a bit
          context.scale(1,-1); 
          
      }
      //context.beginPath();
      //context.rect(0,0,30,20);
      //context.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
      //context.fill();
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(0,0,1,1);
  context.fillRect(1,0,1,1);
  context.fillRect(2,0,1,1);
  context.fillRect(3,0,1,1);
  context.fillRect(4,0,1,1);
  context.fillRect(5,0,1,1);
  context.fillRect(6,0,1,1);
  context.fillRect(7,0,1,1);
  context.fillRect(8,0,1,1);
  context.fillRect(9,0,1,1);
  context.fillRect(10,0,1,1);
  context.fillRect(11,0,1,1);
  context.fillRect(12,0,1,1);
  context.fillRect(13,0,1,1);
  context.fillRect(14,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(15,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.378*alpha + ")";
  context.fillRect(16,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.559*alpha + ")";
  context.fillRect(17,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(18,0,1,1);
  context.fillRect(19,0,1,1);
  context.fillRect(20,0,1,1);
  context.fillRect(21,0,1,1);
  context.fillRect(22,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.685*alpha + ")";
  context.fillRect(23,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(24,0,1,1);
  context.fillStyle="rgba(255,255,255," + 0.189*alpha + ")";
  context.fillRect(25,0,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(26,0,1,1);
  context.fillRect(27,0,1,1);
  context.fillRect(28,0,1,1);
  context.fillRect(29,0,1,1);
  context.fillRect(0,1,1,1);
  context.fillRect(1,1,1,1);
  context.fillRect(2,1,1,1);
  context.fillRect(3,1,1,1);
  context.fillRect(4,1,1,1);
  context.fillRect(5,1,1,1);
  context.fillRect(6,1,1,1);
  context.fillRect(7,1,1,1);
  context.fillRect(8,1,1,1);
  context.fillRect(9,1,1,1);
  context.fillRect(10,1,1,1);
  context.fillRect(11,1,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(12,1,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(13,1,1,1);
  context.fillStyle="rgba(255,255,255," + 0.874*alpha + ")";
  context.fillRect(14,1,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(15,1,1,1);
  context.fillRect(16,1,1,1);
  context.fillRect(17,1,1,1);
  context.fillRect(18,1,1,1);
  context.fillRect(19,1,1,1);
  context.fillRect(20,1,1,1);
  context.fillRect(21,1,1,1);
  context.fillRect(22,1,1,1);
  context.fillRect(23,1,1,1);
  context.fillRect(24,1,1,1);
  context.fillRect(25,1,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(26,1,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(27,1,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(28,1,1,1);
  context.fillRect(29,1,1,1);
  context.fillRect(0,2,1,1);
  context.fillRect(1,2,1,1);
  context.fillRect(2,2,1,1);
  context.fillRect(3,2,1,1);
  context.fillRect(4,2,1,1);
  context.fillRect(5,2,1,1);
  context.fillRect(6,2,1,1);
  context.fillRect(7,2,1,1);
  context.fillRect(8,2,1,1);
  context.fillRect(9,2,1,1);
  context.fillRect(10,2,1,1);
  context.fillStyle="rgba(255,255,255," + 0.378*alpha + ")";
  context.fillRect(11,2,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(12,2,1,1);
  context.fillRect(13,2,1,1);
  context.fillRect(14,2,1,1);
  context.fillRect(15,2,1,1);
  context.fillRect(16,2,1,1);
  context.fillRect(17,2,1,1);
  context.fillRect(18,2,1,1);
  context.fillRect(19,2,1,1);
  context.fillRect(20,2,1,1);
  context.fillRect(21,2,1,1);
  context.fillRect(22,2,1,1);
  context.fillRect(23,2,1,1);
  context.fillRect(24,2,1,1);
  context.fillRect(25,2,1,1);
  context.fillRect(26,2,1,1);
  context.fillStyle="rgba(255,255,255," + 0.811*alpha + ")";
  context.fillRect(27,2,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(28,2,1,1);
  context.fillRect(29,2,1,1);
  context.fillRect(0,3,1,1);
  context.fillRect(1,3,1,1);
  context.fillRect(2,3,1,1);
  context.fillRect(3,3,1,1);
  context.fillRect(4,3,1,1);
  context.fillStyle="rgba(255,255,255," + 0.063*alpha + ")";
  context.fillRect(5,3,1,1);
  context.fillStyle="rgba(255,255,255," + 0.252*alpha + ")";
  context.fillRect(6,3,1,1);
  context.fillRect(7,3,1,1);
  context.fillStyle="rgba(255,255,255," + 0.063*alpha + ")";
  context.fillRect(8,3,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(9,3,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(10,3,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(11,3,1,1);
  context.fillRect(12,3,1,1);
  context.fillRect(13,3,1,1);
  context.fillRect(14,3,1,1);
  context.fillRect(15,3,1,1);
  context.fillRect(16,3,1,1);
  context.fillRect(17,3,1,1);
  context.fillRect(18,3,1,1);
  context.fillRect(19,3,1,1);
  context.fillRect(20,3,1,1);
  context.fillRect(21,3,1,1);
  context.fillRect(22,3,1,1);
  context.fillRect(23,3,1,1);
  context.fillRect(24,3,1,1);
  context.fillRect(25,3,1,1);
  context.fillRect(26,3,1,1);
  context.fillRect(27,3,1,1);
  context.fillStyle="rgba(255,255,255," + 0.252*alpha + ")";
  context.fillRect(28,3,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(29,3,1,1);
  context.fillRect(0,4,1,1);
  context.fillRect(1,4,1,1);
  context.fillRect(2,4,1,1);
  context.fillStyle="rgba(255,255,255," + 0.189*alpha + ")";
  context.fillRect(3,4,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(4,4,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(5,4,1,1);
  context.fillRect(6,4,1,1);
  context.fillRect(7,4,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(8,4,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(9,4,1,1);
  context.fillRect(10,4,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(11,4,1,1);
  context.fillRect(12,4,1,1);
  context.fillRect(13,4,1,1);
  context.fillRect(14,4,1,1);
  context.fillRect(15,4,1,1);
  context.fillRect(16,4,1,1);
  context.fillRect(17,4,1,1);
  context.fillRect(18,4,1,1);
  context.fillRect(19,4,1,1);
  context.fillRect(20,4,1,1);
  context.fillRect(21,4,1,1);
  context.fillRect(22,4,1,1);
  context.fillRect(23,4,1,1);
  context.fillRect(24,4,1,1);
  context.fillRect(25,4,1,1);
  context.fillRect(26,4,1,1);
  context.fillRect(27,4,1,1);
  context.fillStyle="rgba(255,255,255," + 0.252*alpha + ")";
  context.fillRect(28,4,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(29,4,1,1);
  context.fillRect(0,5,1,1);
  context.fillRect(1,5,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(2,5,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(3,5,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(4,5,1,1);
  context.fillRect(5,5,1,1);
  context.fillRect(6,5,1,1);
  context.fillRect(7,5,1,1);
  context.fillRect(8,5,1,1);
  context.fillStyle="rgba(255,255,255," + 0.559*alpha + ")";
  context.fillRect(9,5,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(10,5,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(11,5,1,1);
  context.fillRect(12,5,1,1);
  context.fillRect(13,5,1,1);
  context.fillRect(14,5,1,1);
  context.fillRect(15,5,1,1);
  context.fillRect(16,5,1,1);
  context.fillRect(17,5,1,1);
  context.fillRect(18,5,1,1);
  context.fillRect(19,5,1,1);
  context.fillRect(20,5,1,1);
  context.fillRect(21,5,1,1);
  context.fillRect(22,5,1,1);
  context.fillRect(23,5,1,1);
  context.fillRect(24,5,1,1);
  context.fillRect(25,5,1,1);
  context.fillRect(26,5,1,1);
  context.fillRect(27,5,1,1);
  context.fillStyle="rgba(255,255,255," + 0.252*alpha + ")";
  context.fillRect(28,5,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(29,5,1,1);
  context.fillRect(0,6,1,1);
  context.fillRect(1,6,1,1);
  context.fillStyle="rgba(255,255,255," + 0.622*alpha + ")";
  context.fillRect(2,6,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(3,6,1,1);
  context.fillRect(4,6,1,1);
  context.fillRect(5,6,1,1);
  context.fillRect(6,6,1,1);
  context.fillRect(7,6,1,1);
  context.fillRect(8,6,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(9,6,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(10,6,1,1);
  context.fillStyle="rgba(255,255,255," + 0.811*alpha + ")";
  context.fillRect(11,6,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(12,6,1,1);
  context.fillRect(13,6,1,1);
  context.fillRect(14,6,1,1);
  context.fillRect(15,6,1,1);
  context.fillRect(16,6,1,1);
  context.fillRect(17,6,1,1);
  context.fillRect(18,6,1,1);
  context.fillRect(19,6,1,1);
  context.fillRect(20,6,1,1);
  context.fillRect(21,6,1,1);
  context.fillRect(22,6,1,1);
  context.fillRect(23,6,1,1);
  context.fillRect(24,6,1,1);
  context.fillRect(25,6,1,1);
  context.fillRect(26,6,1,1);
  context.fillStyle="rgba(255,255,255," + 0.874*alpha + ")";
  context.fillRect(27,6,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(28,6,1,1);
  context.fillRect(29,6,1,1);
  context.fillRect(0,7,1,1);
  context.fillRect(1,7,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(2,7,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(3,7,1,1);
  context.fillRect(4,7,1,1);
  context.fillRect(5,7,1,1);
  context.fillRect(6,7,1,1);
  context.fillRect(7,7,1,1);
  context.fillRect(8,7,1,1);
  context.fillRect(9,7,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(10,7,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(11,7,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(12,7,1,1);
  context.fillRect(13,7,1,1);
  context.fillRect(14,7,1,1);
  context.fillRect(15,7,1,1);
  context.fillRect(16,7,1,1);
  context.fillRect(17,7,1,1);
  context.fillRect(18,7,1,1);
  context.fillRect(19,7,1,1);
  context.fillRect(20,7,1,1);
  context.fillRect(21,7,1,1);
  context.fillRect(22,7,1,1);
  context.fillRect(23,7,1,1);
  context.fillRect(24,7,1,1);
  context.fillRect(25,7,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(26,7,1,1);
  context.fillStyle="rgba(255,255,255," + 0.189*alpha + ")";
  context.fillRect(27,7,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(28,7,1,1);
  context.fillRect(29,7,1,1);
  context.fillRect(0,8,1,1);
  context.fillRect(1,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(2,8,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(3,8,1,1);
  context.fillRect(4,8,1,1);
  context.fillRect(5,8,1,1);
  context.fillRect(6,8,1,1);
  context.fillRect(7,8,1,1);
  context.fillRect(8,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(9,8,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(10,8,1,1);
  context.fillRect(11,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.441*alpha + ")";
  context.fillRect(12,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.811*alpha + ")";
  context.fillRect(13,8,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(14,8,1,1);
  context.fillRect(15,8,1,1);
  context.fillRect(16,8,1,1);
  context.fillRect(17,8,1,1);
  context.fillRect(18,8,1,1);
  context.fillRect(19,8,1,1);
  context.fillRect(20,8,1,1);
  context.fillRect(21,8,1,1);
  context.fillRect(22,8,1,1);
  context.fillRect(23,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(24,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(25,8,1,1);
  context.fillStyle="rgba(255,255,255," + 0.063*alpha + ")";
  context.fillRect(26,8,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(27,8,1,1);
  context.fillRect(28,8,1,1);
  context.fillRect(29,8,1,1);
  context.fillRect(0,9,1,1);
  context.fillRect(1,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.315*alpha + ")";
  context.fillRect(2,9,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(3,9,1,1);
  context.fillRect(4,9,1,1);
  context.fillRect(5,9,1,1);
  context.fillRect(6,9,1,1);
  context.fillRect(7,9,1,1);
  context.fillRect(8,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.378*alpha + ")";
  context.fillRect(9,9,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(10,9,1,1);
  context.fillRect(11,9,1,1);
  context.fillRect(12,9,1,1);
  context.fillRect(13,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.063*alpha + ")";
  context.fillRect(14,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.315*alpha + ")";
  context.fillRect(15,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(16,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(17,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.937*alpha + ")";
  context.fillRect(18,9,1,1);
  context.fillStyle="rgba(255,255,255," + alpha + ")";
  context.fillRect(19,9,1,1);
  context.fillRect(20,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.748*alpha + ")";
  context.fillRect(21,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.559*alpha + ")";
  context.fillRect(22,9,1,1);
  context.fillStyle="rgba(255,255,255," + 0.315*alpha + ")";
  context.fillRect(23,9,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(24,9,1,1);
  context.fillRect(25,9,1,1);
  context.fillRect(26,9,1,1);
  context.fillRect(27,9,1,1);
  context.fillRect(28,9,1,1);
  context.fillRect(29,9,1,1);
  context.fillRect(0,10,1,1);
  context.fillRect(1,10,1,1);
  context.fillRect(2,10,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(3,10,1,1);
  context.fillStyle="rgba(255,255,255," + 0.504*alpha + ")";
  context.fillRect(4,10,1,1);
  context.fillRect(5,10,1,1);
  context.fillRect(6,10,1,1);
  context.fillStyle="rgba(255,255,255," + 0.441*alpha + ")";
  context.fillRect(7,10,1,1);
  context.fillStyle="rgba(255,255,255," + 0.189*alpha + ")";
  context.fillRect(8,10,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(9,10,1,1);
  context.fillRect(10,10,1,1);
  context.fillRect(11,10,1,1);
  context.fillRect(12,10,1,1);
  context.fillRect(13,10,1,1);
  context.fillRect(14,10,1,1);
  context.fillRect(15,10,1,1);
  context.fillRect(16,10,1,1);
  context.fillRect(17,10,1,1);
  context.fillRect(18,10,1,1);
  context.fillStyle="rgba(255,255,255," + 0.126*alpha + ")";
  context.fillRect(19,10,1,1);
  context.fillStyle="rgba(0,0,0,0)";
  context.fillRect(20,10,1,1);
  context.fillRect(21,10,1,1);
  context.fillRect(22,10,1,1);
  context.fillRect(23,10,1,1);
  context.fillRect(24,10,1,1);
  context.fillRect(25,10,1,1);
  context.fillRect(26,10,1,1);
  context.fillRect(27,10,1,1);
  context.fillRect(28,10,1,1);
  context.fillRect(29,10,1,1);
  context.fillRect(0,11,1,1);
  context.fillRect(1,11,1,1);
  context.fillRect(2,11,1,1);
  context.fillRect(3,11,1,1);
  context.fillRect(4,11,1,1);
  context.fillRect(5,11,1,1);
  context.fillRect(6,11,1,1);
  context.fillRect(7,11,1,1);
  context.fillRect(8,11,1,1);
  context.fillRect(9,11,1,1);
  context.fillRect(10,11,1,1);
  context.fillRect(11,11,1,1);
  context.fillRect(12,11,1,1);
  context.fillRect(13,11,1,1);
  context.fillRect(14,11,1,1);
  context.fillRect(15,11,1,1);
  context.fillRect(16,11,1,1);
  context.fillRect(17,11,1,1);
  context.fillRect(18,11,1,1);
  context.fillRect(19,11,1,1);
  context.fillRect(20,11,1,1);
  context.fillRect(21,11,1,1);
  context.fillRect(22,11,1,1);
  context.fillRect(23,11,1,1);
  context.fillRect(24,11,1,1);
  context.fillRect(25,11,1,1);
  context.fillRect(26,11,1,1);
  context.fillRect(27,11,1,1);
  context.fillRect(28,11,1,1);
  context.fillRect(29,11,1,1);

      context.restore();
      
    }

    // deal with the page getting resized or scrolled
    window.addEventListener("scroll", updatePosition, false);
    window.addEventListener("resize", updatePosition, false);

    function updatePosition() {
      canvasPos = getPosition(canvas);
    }

    // helper function to get an element's exact position
    function getPosition(el) {
      var xPosition = 0;
      var yPosition = 0;

      while (el) {
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
          var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

          xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
          yPosition += (el.offsetTop - yScrollPos + el.clientTop);
        } else {
          xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
      }
      return {
        x: xPosition,
        y: yPosition
      };
    }
