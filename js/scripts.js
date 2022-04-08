
window.addEventListener('load', function () {


   





    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");
    let text2 = document.getElementById("text2");
    
    window.addEventListener('scroll', function() {
        var value = window.scrollY;
    
         bg.style.top = -value * .75 + 'px'; 
        moon.style.left = value  * 1.5 + 'px'; 
        moon.style.top = value  * 1.5 + 'px'; 
        mountain.style.top =  85  + 'px'; 
        road.style.top = value *  .15 + 'px'; 
        text.style.top = value + 50 * 1 + 'px';
        text2.style.top = value + 50 * 1 + 'px';
     
    
    });



    $('.carousel').carousel({
        interval: 100000
      })


  });




  


