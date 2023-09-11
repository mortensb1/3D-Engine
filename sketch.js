let prikPos = [100,200,-100];
let camPos = [0,0,0];
let cS = -100;

let vinkel = 0;

let prikSk = [0,0];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  sliderScaleX = createSlider(0.1,10,1,0.1);
  sliderScaleX.position(250,10);

  sliderScaleY = createSlider(0.1,10,1,0.1);
  sliderScaleY.position(250,30);

  sliderScaleZ = createSlider(0.1,10,1,0.1);
  sliderScaleZ.position(250,50);
}

function draw() {
  background(220);

  Box3D(0,0,0,30,40,40,true,sliderScaleX.value(),sliderScaleY.value(),sliderScaleZ.value());

  Movement();

  vinkel++;
}

function Movement ()
{
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

function Box3D (x,y,z,w,h,d,center,scaleX,scaleY,scaleZ)
{
  //skaler boxen
  w = w * scaleX;
  h = h * scaleY;
  d = d * scaleZ;

  //sørger for at man har mulighed for at skalere fra midten
  let dForan = 0
  let dBagved = -d

  // sklarer fra midten
  if (center)
  {
    x = x - (w/2);
    y = y - (h/2);
    dForan = d/2
    dBagved = -(d/2)
  }


  let  point3DBox = 
  [
    [[x,y,z+dForan],[x+w,y,z+dForan],[x+w,y+h,z+dForan],[x,y+h,z+dForan]],
    [[x,y,z+dBagved],[x+w,y,z+dBagved],[x+w,y+h,z+dBagved],[x,y+h,z+dBagved]]
  ];

  console.log("old = " + point3DBox[0][0][0])
  console.log("new = " + (point3DBox[0][0][0] * cos(vinkel)))
  point3DBox[0][0][0] += point3DBox[0][0][0] * cos(vinkel);
  point3DBox[0][0][2] += point3DBox[0][0][2] * sin(vinkel);

  point3DBox[0][1][0] += point3DBox[0][1][0] * cos(vinkel);
  point3DBox[0][1][2] += point3DBox[0][1][2] * sin(vinkel);

  // forreste firkant
  Line3D(point3DBox[0][0][0],point3DBox[0][0][1],point3DBox[0][0][2],point3DBox[0][1][0],point3DBox[0][1][1],point3DBox[0][1][2]);
  Line3D(point3DBox[0][1][0],point3DBox[0][1][1],point3DBox[0][1][2],point3DBox[0][2][0],point3DBox[0][2][1],point3DBox[0][2][2]);
  Line3D(point3DBox[0][2][0],point3DBox[0][2][1],point3DBox[0][2][2],point3DBox[0][3][0],point3DBox[0][3][1],point3DBox[0][3][2]);
  Line3D(point3DBox[0][3][0],point3DBox[0][3][1],point3DBox[0][3][2],point3DBox[0][0][0],point3DBox[0][0][1],point3DBox[0][0][2]);

  //linjerne mellem den forreste- og den bagerste firkant
  Line3D(point3DBox[0][0][0],point3DBox[0][0][1],point3DBox[0][0][2],point3DBox[1][0][0],point3DBox[1][0][1],point3DBox[1][0][2]);
  Line3D(point3DBox[0][1][0],point3DBox[0][1][1],point3DBox[0][1][2],point3DBox[1][1][0],point3DBox[1][1][1],point3DBox[1][1][2]);
  Line3D(point3DBox[0][2][0],point3DBox[0][2][1],point3DBox[0][2][2],point3DBox[1][2][0],point3DBox[1][2][1],point3DBox[1][2][2]);
  Line3D(point3DBox[0][3][0],point3DBox[0][3][1],point3DBox[0][3][2],point3DBox[1][3][0],point3DBox[1][3][1],point3DBox[1][3][2]);

  // den bagereste firkant
  Line3D(point3DBox[1][0][0],point3DBox[1][0][1],point3DBox[1][0][2],point3DBox[1][1][0],point3DBox[1][1][1],point3DBox[1][1][2]);
  Line3D(point3DBox[1][1][0],point3DBox[1][1][1],point3DBox[1][1][2],point3DBox[1][2][0],point3DBox[1][2][1],point3DBox[1][2][2]);
  Line3D(point3DBox[1][2][0],point3DBox[1][2][1],point3DBox[1][2][2],point3DBox[1][3][0],point3DBox[1][3][1],point3DBox[1][3][2]);
  Line3D(point3DBox[1][3][0],point3DBox[1][3][1],point3DBox[1][3][2],point3DBox[1][0][0],point3DBox[1][0][1],point3DBox[1][0][2]);
}