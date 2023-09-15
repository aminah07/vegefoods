// project testimonial slider code
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        780:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


function loading(){
    document.getElementById('preloader').style.display = 'none';
}


var btns = document.querySelectorAll('.product-meta a:first-child');

btns.forEach(function(item){

    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.quickView-modal').style.display='block';
    });

});

function closeModal(){
    document.querySelector('.quickView-modal').style.display='none';  
}



var countDownDate = new Date("Nov 29, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);







