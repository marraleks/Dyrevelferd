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

document.querySelector("#dyrevern").addEventListener('click', (e) => {
  gtag('event', 'click', {
      'event_category': 'outbound',
      'event_label': 'dyrevern',
      'transport_type': 'beacon',
      'event_callback': function () {
          window.location = 'http://www.dyrevern.no/stott_oss';
      }
  });
});