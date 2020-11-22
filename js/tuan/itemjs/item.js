$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayHoverPause:true,
    lazyLoad:true,
    margin:5,
    stagePadding:5,
    responsive: {
        320:{
            items:2,
            dots:false,
            nav:true
        },
        728:{
            items:3,
            dots:true,
            nav:true
        },
        960:{
            items:4,
            dots:true,
            nav:true
        },

    }
});