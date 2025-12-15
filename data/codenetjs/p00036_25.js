function bomb(y,x){
   var AG="ABCDEFG".split("");
   for(var i=0;i<7;i++){
      var dx,dy;
      if(i==0){dx=[0,1,0,1];dy=[0,0,1,1];}
      else if(i==1){dx=[0,0,0,0];dy=[0,1,2,3];}
      else if(i==2){dx=[0,1,2,3];dy=[0,0,0,0];}
      else if(i==3){dx=[1,0,1,0];dy=[0,1,1,2];}
      else if(i==4){dx=[0,1,1,2];dy=[0,0,1,1];}
      else if(i==5){dx=[0,0,1,1];dy=[0,1,1,2];}
      else if(i==6){dx=[1,2,0,1];dy=[0,0,1,1];}
      var cnt=0;
      for(var j=0;j<4;j++){
         var yy=y+dy[j];
         var xx=x+dx[j];
         if(yy<0 || yy>=8 || xx<0 || xx>=8)break;
         if(yx[yy][xx]=="1")cnt++;
         if(cnt==4){console.log(AG[i]);return;}
      }
   }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=0;
var yx=[];
for(var i=0;i<Arr.length;i++){
   yx.push(Arr[i].split(""));
   n++;
   if(n!=8)continue;
   for(var y=0;y<8;y++){
      for(var x=0;x<8;x++){
         bomb(y,x);
      }
   }
   yx=[];
   n=0;
   i++;
}