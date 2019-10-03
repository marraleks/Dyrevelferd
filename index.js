var i = 0;
var txt = 'Når jeg blir stor'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}