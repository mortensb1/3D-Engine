let prikPos = [100,200,-100];
let camPos = [0,0,0];
let cS = -100;

let prikSk = [0,0];

let i = 0;

let lastX = 0;
let lastY = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // prikPos[2]--;

  // prikSk[0] = (prikPos[0]*cS)/prikPos[2]
  // prikSk[1] = (prikPos[1]*cS)/prikPos[2]

  // point(prikSk[0],prikSk[1]);

  i -= 0.1;

  Prik3D(100,100,-100+i);
  Prik3D(100,200,-100+i);
  Prik3D(200,200,-100+i);
  Prik3D(200,100,-100+i);

  Line3D(100,100,-100+i,100,200,-100+i);
  Line3D(100,200,-100+i,200,200,-100+i)
  Line3D(200,200,-100+i,200,100,-100+i)
  Line3D(200,100,-100+i,100,100,-100+i)
  
  Prik3D(100,100,-200+i);
  Prik3D(200,100,-200+i);
  Prik3D(200,200,-200+i);
  Prik3D(100,200,-200+i);

  Line3D(100,100,-200+i,100,200,-200+i);
  Line3D(100,200,-200+i,200,200,-200+i)
  Line3D(200,200,-200+i,200,100,-200+i)
  Line3D(200,100,-200+i,100,100,-200+i)

  Line3D(100,100,-200+i,100,100,-100+i)
  Line3D(200,100,-200+i,200,100,-100+i)
  Line3D(100,200,-200+i,100,200,-100+i)
  Line3D(200,200,-200+i,200,200,-100+i)
}

function Prik3D (prikX,prikY,prikZ)
{
  prikPositionSkermX = (prikX*cS)/prikZ;
  prikPositionSkermY = (prikY*cS)/prikZ;

  point(prikPositionSkermX,prikPositionSkermY);
  // line(lastX,lastY,prikPositionSkermX,prikPositionSkermY)

  // lastX = prikPositionSkermX;
  // lastY = prikPositionSkermY;
}

function Line3D (lineX1,lineY1,lineZ1,lineX2,lineY2,lineZ2)
{
  linePositionSkermX1 = (lineX1*cS)/lineZ1;
  linePositionSkermY1 = (lineY1*cS)/lineZ1;

  linePositionSkermX2 = (lineX2*cS)/lineZ2;
  linePositionSkermY2 = (lineY2*cS)/lineZ2;

  line(linePositionSkermX1,linePositionSkermY1,linePositionSkermX2,linePositionSkermY2)
}