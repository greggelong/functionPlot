# function plot in p5js

A simple sketch to plot math functions on p5 canvas

hope to expand to animate plots and do cobweb plots for iterated functions.  

sketch.js is the simple plotting function


sketch1.js I have added a scaler to zoom into the plot here it is controlled by mouseX

sketch2.js  has separate function for getting values and plotting. in one function  y coordinates of the function are stored in an array and in the plotting function those array values are plotted.


sketch3.js I am starting the cobweb function I need to get an algorithm to get the vertex and then plot.  I may need to change the data structures I am storing values in. at the moment only plotting two lines and works for a some different values 

sketch4.js I changed the number of points plotted to include non integer parts. still using a 600 pixel canvas. and the smallest number is -300 and largest is 300.    let res = .25 // less than a whole  number  1, .5, .25, .125 plotting 600, 1200, 2400, and 4800 points 
// from - 300 to 300  (.125 looks like this (4800) [-300, -299.875, -299.75, -299.625, -299.5,])
// but .5 looks like this (1200) [-300, -299.5, -299, -298.5, -298, 
let cnv;
// to be plotted on a 600 by 600 canvas


sketch5.js god's eye. plotting y = x and the function -1*(0.2*x)**2 +45 and then animating the first few iterates of that function for values -57 to 57.  This creates a cobweb diagram. These diagrams remind me of the god's eyes we would make as children wrapping yarn around sticks. Functions like this would make cool string art. I think I will give it a try.