function countTouches(event) {
  var x = event.touches[0].screenX;
  document.getElementById("lname").innerHTML = x;
}