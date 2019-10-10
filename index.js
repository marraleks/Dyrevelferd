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

document.getElementById("dyrevern").addEventListener("click", touchPress);

function touchPress() {
  document.getElementById("dyrevern").style.transform = "translateY(4px)";
  document.getElementById("dyrevern").style.boxShadow = "-1px 4px 1px rgba(68, 68, 68, 0.6)";
}
// window.addEventListener('scroll', () => {
//   window.scrollTo(0,0)
// })

  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

//   let currentSlide = 1;
//   let date = new Date()
//   before = date.getTime()

//   window.addEventListener('wheel', function (e) {

//       console.log(e.deltaY);

//       //wait 2 secs between doing something because the wheel events happpen multiple times
//       let date = new Date()
//       now = date.getTime()
//       let threshold = Math.abs(e.deltaY)

//       //set higher threshold limit for less reaction
//       if (now - before < 800 && threshold < 50) {
//           return //stop function entirely
//       } else {
//           before = now
//       }

//       //normalize horisontal/vertical scroll (otherwise the value can be somewhere between zero and 50+) 
//       let y = e.deltaY > 0 ? 1 : -1

//       //scroll directions
//       if( y <= 0 ) {
//           currentSlide += 1 
//       }else{
//           currentSlide -= 1
//       }

//       console.log(currentSlide)
//       if(currentSlide >= 0 && currentSlide <= 5){
//           shiftSlide(currentSlide)
//       }

//   });

//   let lastSlide = 0;
//   function shiftSlide(current){
//     document.querySelectorAll('section').forEach( (e) => {
//         e.style.transform = "translateY(-" + current * 100 + "vh)"
//     })
//   }

let mainNavLinks = document.querySelectorAll("main div#dot-menu div a");
let mainSection = document.querySelectorAll("main section");

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    console.log(mainNavLinks);
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop - 500 <= fromTop && section.offsetTop - 500 + section.offsetHeight > fromTop  
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


console.log(mainSection);