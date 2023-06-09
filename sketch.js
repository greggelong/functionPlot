let step = 1;
let cnv;
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
  scale(1);
  plotaxis();
  plotfun("x", color(0, 255, 0));
  plotfun("(-0.5*x)+2", color(255, 0, 255));
  plotfun("(.3*x+10)**2", color(255, 255, 0));
  plotfun("((.13*x)**3+(.13*x)**2 -6*x-8)/4", color(0, 255, 255));
  plotfun("sin(2*x)*80", color(255));
  //saveCanvas('myplot2', 'png');
}

function plotaxis() {
  //axis
  stroke(255, 0, 0);
  line(0, -height / 2, 0, height);
  line(-width / 2, 0, width, 0);
}

function plotfun(eq, clr) {
  //stroke(random(255),random(255),random(255));
  stroke(clr);
  noFill();
  beginShape();
  for (let x = -width / 2; x < width / 2; x += step) {
    let fy = eval(eq);
    let ccy = fy * -1; // ccy is corrected y since the top is -y and the bottom is +y
    vertex(x, ccy);
  }
  endShape();
}
