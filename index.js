

// Når jeg blir stor typetext
let i = 0;
let txt = 'Når jeg blir stor';
let speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Outbound link for Google Analytics
document.querySelector("#dyrevern").addEventListener('click', (e) => {
  gtag('event', 'click', {
      'event_category': 'outbound',
      'event_label': 'dyrevern',
      'transport_type': 'beacon',
      'event_callback': function () {
          window.location = 'http://www.dyrevern.no/stott_oss?utm_source=Kristiania&utm_medium=google_ads&utm_campaign=naar_jeg_bli_stor';
      }
  });
});


// Custom mouse cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 7.5)+"px; left: "+(e.pageX - 7.5)+"px;")
})


document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Animation on button click
document.getElementById("dyrevern").addEventListener("click", touchPress);

function touchPress() {
  document.getElementById("dyrevern").style.transform = "translateY(4px)";
  document.getElementById("dyrevern").style.boxShadow = "-1px 4px 1px rgba(68, 68, 68, 0.6)";
}

// Vh on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Navigation dots
let mainNavLinks = document.querySelectorAll("main div#dot-menu div a");
const dotNav = document.querySelector("#dot-menu");



window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      fromTop > 400 
    ) {
      dotNav.style.display = "inline";
    } else if (
      fromTop < 400
    ) {
      dotNav.style.display = "none";
    }
    if (
      section.offsetTop - 400 <= fromTop && section.offsetTop - 400 + section.offsetHeight > fromTop  
    ) {
      link.classList.add("current");
    }    
    else {
      link.classList.remove("current");
    }
  });
});