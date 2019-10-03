let i = 0;
let txt = 'Når jeg blir stor'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}