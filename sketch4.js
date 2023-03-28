let zoom =1;
let res = .5 // less than a whole  number  1, .5, .25, .125 plotting 600, 1200, 2400, and 4800 points 
// from - 300 to 300  (.125 looks like this (4800) [-300, -299.875, -299.75, -299.625, -299.5,])
// but .5 looks like this (1200) [-300, -299.5, -299, -298.5, -298, 
let cnv;
// to be plotted on a 600 by 600 canvas

let p1y = [];  // plt 1 will always be y=x
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
  getValues(p2y,"(x)**2 -8");
  //plotfun("(-0.5*x)+2", color(255, 0, 255));
  plotfun(p1y, color(255, 255, 0));
  plotfun(p2y, color(0, 255, 255));
  print("hello",p1y)
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
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = eval(eq);
    /// correct values when plotting not here
    arr.push(fy)

}

}

function plotfun(yarr, clr) {
  //stroke(random(255),random(255),random(255));
  stroke(clr);
  strokeWeight(1)
  noFill();
  beginShape();
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = yarr[x+((yarr.length)/2)]; //so it gets the values from the array
    let cy = fy * -1; // cy is corrected for plotting like cartesian not computer
   vertex(x*zoom, cy*zoom);
   ellipse(x*zoom,cy*zoom,5,5) // calculated points plotted on vertex
  }
  endShape();
}
