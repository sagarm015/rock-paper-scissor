const mongoose = require("mongoose");

var p1,p2,p3,p4;         //players
var pr1=[null,0,0,0];    //scores of each player
var pr2=[0,null,0,0];
var pr3=[0,0,null,0];
var pr4=[0,0,0,null];
var choices=["rock","paper","scissors"];
var randomIndex;


mongoose.connect("mongodb://localhost:27017/SPS",{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  player1: [],
  player2: [],
  player3: [],
  player4: []
});

const User = mongoose.model("User",userSchema);

function fillResultPr1(p1,p2,p3,p4){
  if(p1==="rock"){
    if(p2==="rock"){
      pr1[1]=null;
    }
   if(p2==="scissors"){
      pr1[1]=1;
    }
  }
  if(p1==="paper"){
    if(p2==="paper"){
      pr1[1]=null;
    }
   if(p2==="rock"){
      pr1[1]=1;
    }
  }
  if(p1==="scissors"){
    if(p2==="scissors"){
      pr1[1]=null;
    }
   if(p2==="paper"){
      pr1[1]=1;
    }
  }
  /////////////////
  if(p1==="rock"){
    if(p3==="rock"){
      pr1[2]=null;
    }
   if(p3==="scissors"){
      pr1[2]=1;
    }
  }
  if(p1==="paper"){
    if(p3==="paper"){
      pr1[2]=null;
    }
   if(p3==="rock"){
      pr1[2]=1;
    }
  }
  if(p1==="scissors"){
    if(p3==="scissors"){
      pr1[2]=null;
    }
   if(p3==="paper"){
      pr1[2]=1;
    }
  }
  ///////////////////////
  if(p1==="rock"){
    if(p4==="rock"){
      pr1[3]=null;
    }
   if(p4==="scissors"){
      pr1[3]=1;
    }
  }
  if(p1==="paper"){
    if(p4==="paper"){
      pr1[3]=null;
    }
   if(p4==="rock"){
      pr1[3]=1;
    }
  }
  if(p1==="scissors"){
    if(p4==="scissors"){
      pr1[3]=null;
    }
   if(p4==="paper"){
      pr1[3]=1;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function fillResultPr2(p1,p2,p3,p4){
  if(p2==="rock"){
    if(p1==="rock"){
      pr2[0]=null;
    }
   if(p1==="scissors"){
      pr2[0]=1;
    }
  }
  if(p2==="paper"){
    if(p1==="paper"){
      pr2[0]=null;
    }
   if(p1==="rock"){
      pr2[0]=1;
    }
  }
  if(p2==="scissors"){
    if(p1==="scissors"){
      pr2[0]=null;
    }
   if(p1==="paper"){
      pr2[0]=1;
    }
  }
  /////////////////
  if(p2==="rock"){
    if(p3==="rock"){
      pr2[2]=null;
    }
   if(p3==="scissors"){
      pr2[2]=1;
    }
  }
  if(p2==="paper"){
    if(p3==="paper"){
      pr2[2]=null;
    }
   if(p3==="rock"){
      pr2[2]=1;
    }
  }
  if(p2==="scissors"){
    if(p3==="scissors"){
      pr2[2]=null;
    }
   if(p3==="paper"){
      pr2[2]=1;
    }
  }
  ///////////////////////
  if(p2==="rock"){
    if(p4==="rock"){
      pr2[3]=null;
    }
   if(p4==="scissors"){
      pr2[3]=1;
    }
  }
  if(p2==="paper"){
    if(p4==="paper"){
      pr2[3]=null;
    }
   if(p4==="rock"){
      pr2[3]=1;
    }
  }
  if(p2==="scissors"){
    if(p4==="scissors"){
      pr2[3]=null;
    }
   if(p4==="paper"){
      pr2[3]=1;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fillResultPr3(p1,p2,p3,p4){
  if(p3==="rock"){
    if(p1==="rock"){
      pr3[0]=null;
    }
   if(p1==="scissors"){
      pr3[0]=1;
    }
  }
  if(p3==="paper"){
    if(p1==="paper"){
      pr3[0]=null;
    }
   if(p1==="rock"){
      pr3[0]=1;
    }
  }
  if(p3==="scissors"){
    if(p1==="scissors"){
      pr3[0]=null;
    }
   if(p1==="paper"){
      pr3[0]=1;
    }
  }
  /////////////////
  if(p3==="rock"){
    if(p2==="rock"){
      pr3[1]=null;
    }
   if(p2==="scissors"){
      pr3[1]=1;
    }
  }
  if(p3==="paper"){
    if(p2==="paper"){
      pr3[1]=null;
    }
   if(p2==="rock"){
      pr3[1]=1;
    }
  }
  if(p3==="scissors"){
    if(p2==="scissors"){
      pr3[1]=null;
    }
   if(p2==="paper"){
      pr3[1]=1;
    }
  }
  ///////////////////////
  if(p3==="rock"){
    if(p4==="rock"){
      pr3[3]=null;
    }
   if(p4==="scissors"){
      pr3[3]=1;
    }
  }
  if(p3==="paper"){
    if(p4==="paper"){
      pr3[3]=null;
    }
   if(p4==="rock"){
      pr3[3]=1;
    }
  }
  if(p3==="scissors"){
    if(p4==="scissors"){
      pr3[3]=null;
    }
   if(p4==="paper"){
      pr3[3]=1;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fillResultPr4(p1,p2,p3,p4){
  if(p4==="rock"){
    if(p1==="rock"){
      pr4[0]=null;
    }
   if(p1==="scissors"){
      pr4[0]=1;
    }
  }
  if(p4==="paper"){
    if(p1==="paper"){
      pr4[0]=null;
    }
   if(p1==="rock"){
      pr4[0]=1;
    }
  }
  if(p4==="scissors"){
    if(p1==="scissors"){
      pr4[0]=null;
    }
   if(p1==="paper"){
      pr4[0]=1;
    }
  }
  /////////////////
  if(p4==="rock"){
    if(p2==="rock"){
      pr4[1]=null;
    }
   if(p2==="scissors"){
      pr4[1]=1;
    }
  }
  if(p4==="paper"){
    if(p2==="paper"){
      pr4[1]=null;
    }
   if(p2==="rock"){
      pr4[1]=1;
    }
  }
  if(p4==="scissors"){
    if(p2==="scissors"){
      pr4[1]=null;
    }
   if(p2==="paper"){
      pr4[1]=1;
    }
  }
  ///////////////////////
  if(p4==="rock"){
    if(p3==="rock"){
      pr4[2]=null;
    }
   if(p3==="scissors"){
      pr4[2]=1;
    }
  }
  if(p4==="paper"){
    if(p3==="paper"){
      pr4[2]=null;
    }
   if(p3==="rock"){
      pr4[2]=1;
    }
  }
  if(p4==="scissors"){
    if(p3==="scissors"){
      pr4[2]=null;
    }
   if(p3==="paper"){
      pr4[2]=1;
    }
  }
}

for(var i=0;i<50;i++){
randomIndex= Math.floor(Math.random()*3);
p1=choices[randomIndex];
randomIndex= Math.floor(Math.random()*3);
p2=choices[randomIndex];
randomIndex= Math.floor(Math.random()*3);
p3=choices[randomIndex];
randomIndex= Math.floor(Math.random()*3);
p4=choices[randomIndex];
fillResultPr1(p1,p2,p3,p4);
fillResultPr2(p1,p2,p3,p4);
fillResultPr3(p1,p2,p3,p4);
fillResultPr4(p1,p2,p3,p4);
const newUser = new User({
  player1 : pr1,
  player2: pr2,
  player3: pr3,
  player4: pr4
})
newUser.save();
 pr1=[null,0,0,0];
 pr2=[0,null,0,0];
 pr3=[0,0,null,0];
 pr4=[0,0,0,null];
}
User.find(function(Err,result){
  var count=1;
  result.forEach(function(element){
    console.log(count++,"iteration");
    console.log(element);
  });
});
