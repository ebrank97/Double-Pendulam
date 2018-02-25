let m1 = 25;
let m2 = 25;
let r1 = 200;
let r2 = 200;
let a1 = 0;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;
let a1_a = 0;
let a2_a = 0;
let g = 1;
let x1, y1, x2, y2, px2 = -1, py2 = -1;
let pg, cx, cy;

function setup() {
  // put setup code here
  createCanvas(700, 700);
  a1 = PI/2;
  a2 = PI/2;
  cx = width/2;
  cy = 50;
  pg = createGraphics(width, height);
  pg.background(0);
  pg.translate(cx, cy);
}

function draw() {
  // put drawing code here

  a1_a = ((-g * (2 * m1 + m2) * sin(a1)) - (m2 * g * sin(a1 - 2 * a2)) - 2 * sin(a1 - a2) * m2 * (a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2)))/(r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));
  a2_a = (2 * sin(a1 - a2) * (a1_v * a1_v * r1 * (m1 + m2) + g * (m1 + m2) * cos(a1) + a2_v * a2_v * r2 * m2 * cos(a1-a2)))/(r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));


  background(0);
  imageMode(CORNER);
  image(pg, 0, 0, width, height);

  translate(cx, cy);
  stroke(255);
  strokeWeight(2);



  x1 = r1 * sin(a1);
  y1 = r1 * cos(a1);

  x2  = x1 + r2 * sin(a2);
  y2 = y1 + r2 * cos(a2);




  line(0,0,x1,y1);
  fill(255);
  ellipse(x1,y1, m1);

  line(x1, y1, x2, y2);
  fill(255);
  ellipse(x2, y2, m2);

  a1_v += a1_a;
  a2_v += a2_a;

  a1 += a1_v;
  a2 += a2_v;

  //a1_v *= 0.999;
  //a2_v *= 0.999;



  pg.stroke(255);
  //pg.strokeWeight(2);
  if(frameCount > 1){
      pg.line(px2, py2, x2, y2);
  }


  px2 = x2;
  py2 = y2;
}
