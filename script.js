function countTouches(event) {
  var x = event.touches.length;
  document.getElementById("demo").innerHTML = x;
}