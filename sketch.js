let nbarray = [];
let x=0;


function setup() {
  createCanvas(600, 600, WEBGL); 
 
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }

}
function draw() {
  fill(mouseX,mouseY,100);
  background(mouseX,20,mouseY);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  
   x=x+0.05
    if(mouseIsPressed){
  fill(mouseX,mouseY,100);
  square(mouseX-325,mouseY-325, 55);  
  //noStroke();
    
  } else{
    fill(100,mouseY,mouseX);
    circle(mouseX-300, mouseY-300,20+5*sin(x));
    //noStroke();
  }
  
  
  
  
  
  
  
  
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    noStroke();
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.1);
        rotateY(frameCount*0.1);
        this.mx = this.mx+0.5;
        }
       cylinder(this.size*1);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}