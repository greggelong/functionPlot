let zoom = 5;
let res = 1; // less than a whole  number  1, .5, .25, .125 plotting 600, 1200, 2400, and 4800 points
// from - 300 to 300  (.125 looks like this (4800) [-300, -299.875, -299.75, -299.625, -299.5,])
// but .5 looks like this (1200) [-300, -299.5, -299, -298.5, -298,
let cnv;
// to be plotted on a 600 by 600 canvas

let p1y = []; // plt 1 will always be y=x
let p2y = [];

let cobplot = -25
function setup() {
  cnv = createCanvas(600, 600);
  cx = (windowWidth - cnv.width) / 2;
  cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);

  angleMode(DEGREES);
  background(0);
  strokeWeight(1);
  translate(width / 2, height / 2); // move to center

  textSize(32);
  plotaxis();
  getValues(p1y, "x");
  getValues(p2y, "-1*(0.2*x)**2 +45");
  //getValues(p2y,"(-1.75*x) - 3")
  plotfun(p1y, color(255, 255, 0));
  plotfun(p2y, color(0, 255, 0));
  print("hello", p1y);
  print(p2y);
  //plotfun("sin(2*x)*80", color(255));
  //saveCanvas('myplot2', 'png');
  for (let i =-55; i<56;i++){
    cobweb(i)
  }
  frameRate(10)

}

function draw(){

  
  translate(width / 2, height / 2); // move to center
  background(0,15);
  
  //print(zoom)
  plotaxis();
  plotfun(p1y, color(200));
  plotfun(p2y, color(255));
  cobweb(cobplot)
  cobplot ++
  if (cobplot>56){
    cobplot = -55
    for (let i =-55; i<56;i++){
      cobweb(i)
    }
  }

  
 
}

function plotaxis() {
  //axis
  stroke(80);
  line(0, -height / 2, 0, height);
  line(-width / 2, 0, width, 0);
}

function getValues(arr, eq) {
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = eval(eq);
    /// correct values when plotting not here
    arr.push(fy);
  }
}

function plotfun(yarr, clr) {
  //stroke(random(255),random(255),random(255));
  stroke(clr);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = yarr[x + yarr.length / 2]; //so it gets the values from the array
    let cy = fy * -1; // cy is corrected for plotting like cartesian not computer
    vertex(x * zoom, cy * zoom);
    //ellipse(x * zoom, cy * zoom, 5, 5); // calculated points plotted on vertex
  }
  endShape();
}

function cobweb(strt) {
  print("hello cobweb");
  let tx = strt;
  let ty = strt;
  let nexty, nextx;
  strokeWeight(2)
  print(ty);
  stroke(random(100,255),random(255), random(100,255));
  //ellipse(tx * zoom, -ty * zoom, 30, 30);
  // get that positionin the array
  for (let i = 0; i < 10; i++) {
    nextx = tx;
    nexty = p2y[tx + 600 / 2];
    line(tx * zoom, -ty * zoom, nextx * zoom, -nexty * zoom);
    tx = floor(nexty);
    ty = floor(nexty);
    print(tx, ty);
    line(nextx * zoom, -nexty * zoom, tx * zoom, -ty * zoom);
    // get next xy point
  }
}
