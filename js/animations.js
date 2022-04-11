/* This allows the elements to have their default styling if JavaScript is disabled in the browser. */
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

const scrollOffset = 100;


/* We can detect when an element is in view of the user by determining if the distance of the element from the top of the page is less than the height of the visible part of the page. */

/* We can modify this function to detect when the element has scrolled x pixels into the page via scrollOffset */
const elementInView = (el, scrollOffset) => {
    
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  };


  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  // const hideScrollElement = (element) => {
  //   element.classList.remove('scrolled');
  // }

  const handleScrollAnimation = () => {
      document.querySelectorAll(".js-scroll").forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
        // hideScrollElement(el);
      }
  })

  document.querySelectorAll(".js-scroll2").forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
        // hideScrollElement(el);
      }
  })


  
}

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })


/* throttle function to optimize performance */

//initialize throttleTimer as false
let throttleTimer = false;
 
const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;
     
    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;
     
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
    }, time);
}

// window.addEventListener('scroll', () => {
//     throttle(handleScrollAnimation, 250);
//   })