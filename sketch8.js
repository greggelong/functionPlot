let zoom = 5;
let res = 1; // less than a whole  number  1, .5, .25, .125 plotting 600, 1200, 2400, and 4800 points
// from - 300 to 300  (.125 looks like this (4800) [-300, -299.875, -299.75, -299.625, -299.5,])
// but .5 looks like this (1200) [-300, -299.5, -299, -298.5, -298,
let cnv;
// to be plotted on a 600 by 600 canvas

let p1y = []; // plt 1 will always be y=x
let p2y = [];
//let eq1=  "(0.045*x)**3 - 3"//"-1*(0.2*x)**2 +45"
//let eq1=  "(-0.045*x)**3 - 3"//"-1*(0.2*x)**2 +45"
//let eq1= "(.33*x)-3"
//let eq1= "(-.33*x)-3"
let eq1 = "x-0.3*x**2+30";
let cobplot = -25;

let eqs = [
  function (x) {
    return -1 * (0.2 * x) ** 2 + 45;
  },
  function (x) {
    return x - 0.3 * x ** 2 + 30;
  },
  function (x) {
    return (0.045 * x) ** 3 - 3;
  },
  function (x) {
    return (-0.045 * x) ** 3 - 3;
  },
  function (x) {
    return 0.33 * x - 3;
  },
  function (x) {
    return -0.33 * x - 3;
  },
];
let eqcount = 0;
let fc = -1;

function setup() {
  cnv = createCanvas(600, 600);
  cx = (windowWidth - cnv.width) / 2;
  cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);

  angleMode(DEGREES);
  background(0);
  strokeWeight(1);
  translate(width / 2, height / 2); // move to center
  plotaxis();
}

function draw() {
  if (fc % 111 == 0) {
    background(0);

    cobplot = 57;
    eqcount++;
    eqcount = eqcount % eqs.length;
  }
  translate(width / 2, height / 2); // move to center
  background(0, 10);
  //print(eqcount)
  //print(zoom)
  plotaxis();
  plotfun(color(255));
  cobweb2(cobplot);
  cobplot++;
  if (cobplot > 56) {
    cobplot = -55;
    for (let i = -55; i < 56; i++) {
      cobweb2(i);
    }
    //saveCanvas('myCanvas', 'png');
  }
  fc++;
}

function plotaxis() {
  //axis
  stroke(80);
  line(0, -height / 2, 0, height); //vert
  line(-width / 2, 0, width, 0); //horizontal
  stroke(255);
  line(-width / 2, height / 2, width / 2, -height / 2);
}

function getValues(arr, eq) {
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = eval(eq);
    /// correct values when plotting not here
    arr.push(fy);
  }
}

function plotfun(clr) {
  //stroke(random(255),random(255),random(255));
  stroke(clr);
  strokeWeight(2);
  noFill();
  beginShape();
  //let myeq = eval(eq)
  for (let x = -width / 2; x < width / 2; x += res) {
    let fy = (eqs[eqcount](x)); //so it gets the values from the array
    let cy = fy * -1; // cy is corrected for plotting like cartesian not computer
    vertex(x * zoom, cy * zoom);
    //ellipse(x * zoom, cy * zoom, 5, 5); // calculated points plotted on vertex
  }
  endShape();
}

function cobweb2(strt) {
  //print("hello cobweb2");
  // a much better way to get the points by iterating the seed through the function i
  // instead of looking them up in the array as I did in the last version.
  let x = strt;
  let y = strt;
  let nexty, nextx;
  strokeWeight(2);
  //print(y);
  stroke(random(100, 255), random(255), random(100, 255));
  //ellipse(tx * zoom, -ty * zoom, 30, 30);
  // get that positionin the array
  for (let i = 0; i < 10; i++) {
    nextx = x;
    nexty = (eqs[eqcount](x)); // getting the values by iteration
    line(x * zoom, -y * zoom, nextx * zoom, -nexty * zoom);
    x = nexty;
    y = nexty;
    //print(x, y);
    line(nextx * zoom, -nexty * zoom, x * zoom, -y * zoom);
    // get next xy point
  }
}
