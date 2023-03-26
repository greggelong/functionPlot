let zoom =20;
let cnv;
// only y arrays as we plot x from -300 to 300

let p1y = [];
let p2y = [];
function setup() {
  cnv =createCanvas(600, 600);
  cx = (windowWidth-cnv.width)/2
  cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)

  angleMode(DEGREES);
  background(0);
  strokeWeight(1);
  translate(width / 2, height / 2); // move to center

  textSize(32);
  plotaxis();
  getValues(p1y,"x");
  getValues(p2y,"(0.3*x)**2 - 3");
  //plotfun("(-0.5*x)+2", color(255, 0, 255));
  plotfun(p1y, color(255, 255, 0));
  plotfun(p2y, color(0, 255, 255));
  //plotfun("sin(2*x)*80", color(255));
  //saveCanvas('myplot2', 'png');
}
/*
function draw(){

  
  translate(width / 2, height / 2); // move to center
  background(0);
  zoom = map(mouseX,0,width,1,30)
  zoom = constrain(zoom,1,30) //constrain zoom
  //print(zoom)
  plotaxis();
  plotfun("x", color(0, 255, 0));
  //plotfun("(-0.5*x)+2", color(255, 0, 255));
  plotfun("(0.3*x)**2 - 3", color(255, 255, 0));
  //plotfun("sin(x)*10", color(255));
 
}
*/

function plotaxis() {
  //axis
  stroke(255, 0, 0);
  line(0, -height / 2, 0, height);
  line(-width / 2, 0, width, 0);
}

function getValues(arr,eq){
  for (let x = -width / 2; x < width / 2; x += 1) {
    let fy = eval(eq);
    let ccy = fy * -1; // ccy is corre
    arr.push(ccy)

}

}

function plotfun(yarr, clr) {
  //stroke(random(255),random(255),random(255));
  stroke(clr);
  noFill();
  beginShape();
  for (let x = -width / 2; x < width / 2; x += 1) {
    let fy = yarr[x+width/2]; //so it gets the values from the array
    print(x,fy)
     // y is correced when getting the valuses
    vertex(x*zoom, fy*zoom);
  }
  endShape();
}
