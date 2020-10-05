function countTouches(event) {
  var x = event.touches[0].screenX;
  var myElement=document.getElementById("fname");
  var position = getPosition(myElement);
  var pos_x=position.x + myElement.clientWidth/2;
  var pos_y=position.y + myElement.clientHeight/2;

  myElement.value="(" + pos_x + "," + pos_y + ")"+ "("+x+")" ;


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