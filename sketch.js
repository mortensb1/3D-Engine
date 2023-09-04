let prikPos = [100,200,-100];
let camPos = [0,0,0];
let cS = -100;

let prikSk = [0,0];

let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // prikPos[2]--;

  // prikSk[0] = (prikPos[0]*cS)/prikPos[2]
  // prikSk[1] = (prikPos[1]*cS)/prikPos[2]

  // point(prikSk[0],prikSk[1]);

  // i -= 1;

  Prik3D(-100,-100,-100+i);
  Prik3D(-100,100,-100+i);
  Prik3D(100,100,-100+i);
  Prik3D(100,-100,-100+i);


  Line3D(-100,-100,-100+i,-100,100,-100+i);
  Line3D(-100,100,-100+i,100,100,-100+i)
  Line3D(100,100,-100+i,100,-100,-100+i)
  Line3D(100,-100,-100+i,-100,-100,-100+i)
  
  Prik3D(-100,-100,-200+i);
  Prik3D(-100,100,-200+i);
  Prik3D(100,100,-200+i);
  Prik3D(100,-100,-200+i);

  Line3D(-100,-100,-200+i,-100,100,-200+i);
  Line3D(-100,100,-200+i,100,100,-200+i)
  Line3D(100,100,-200+i,100,-100,-200+i)
  Line3D(100,-100,-200+i,-100,-100,-200+i)

  Line3D(-100,-100,-200+i,-100,-100,-100+i)
  Line3D(-100,100,-200+i,-100,100,-100+i)
  Line3D(100,100,-200+i,100,100,-100+i)
  Line3D(100,-100,-200+i,100,-100,-100+i)

  if (keyIsDown(65)) //a
  {
    camPos[0] += 4;
  }
  if (keyIsDown(68)) //d
  {
    camPos[0] -= 4;
  }
  if (keyIsDown(87)) //w
  {
    camPos[1] += 4;
  }
  if (keyIsDown(83)) //s
  {
    camPos[1] -= 4;
  }
  if (keyIsDown(40)) //down arrow
  {
    camPos[2] -= 2
  }
  if (keyIsDown(38)) //up arrow
  {
    camPos[2] += 2
  }

}

function Prik3D (prikX,prikY,prikZ)
{
  prikX += camPos[0];
  prikY += camPos[1];
  prikZ += camPos[2];

  prikPositionSkermX = (prikX*cS)/prikZ;
  prikPositionSkermY = (prikY*cS)/prikZ;

  point(prikPositionSkermX + width/2,prikPositionSkermY + height/2);
}

function Line3D (lineX1,lineY1,lineZ1,lineX2,lineY2,lineZ2)
{
  lineX1 += camPos[0];
  lineX2 += camPos[0];
  lineY1 += camPos[1];
  lineY2 += camPos[1];
  lineZ1 += camPos[2];
  lineZ2 += camPos[2];

  linePositionSkermX1 = (lineX1*cS)/lineZ1;
  linePositionSkermY1 = (lineY1*cS)/lineZ1;

  linePositionSkermX2 = (lineX2*cS)/lineZ2;
  linePositionSkermY2 = (lineY2*cS)/lineZ2;

  line(linePositionSkermX1 + width/2,linePositionSkermY1 + height/2,linePositionSkermX2 + width/2,linePositionSkermY2 + height/2)
}