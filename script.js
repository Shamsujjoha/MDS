function countTouches(event) {
  var x = event.touches[0].screenX;
  var y = event.touches[0].screenY;

  var tName = ["fname","mname","lname"];
  var i,dis,idx;
  var minDis=100000000.00;
  var myElement;

  for(i=0;i<3;i++){

     myElement=document.getElementById(tName[i]);
     myElement.value="";
     var position = getPosition(myElement);
     var pos_x=position.x + myElement.clientWidth/2;
     var pos_y=position.y + myElement.clientHeight/2;

      dis= Math.sqrt( ((x-pos_x)*(x-pos_x)) + ((y-pos_y)*(y-pos_y)) );
      if(dis<minDis){
        minDis=dis;
        idx=i;
      }


  }

  //var myElement=document.getElementById("fname");
 // var position = getPosition(myElement);
 // var pos_x=position.x + myElement.clientWidth/2;
 // var pos_y=position.y + myElement.clientHeight/2;
  
  myElement=document.getElementById(tName[idx]);
  //myElement.value="(" + pos_x + "," + pos_y + ")"+ "("+x+")" ;
  
  myElement.value="I'm selected";

}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };

}