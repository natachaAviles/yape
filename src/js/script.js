$(document).ready(function() {
	console.log('hola');
    $('.carousel.carousel-slider').carousel();

});

/*window.onload = function(){

    (function(){
        var counter = 21;

        setInterval(function() {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
            }
    
            if (counter === 0) {
                alert('ahora debería suceder algo');
                clearInterval(counter);
            }

        }, 1000);

    })();

}*/
