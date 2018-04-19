$(window).on('scroll', ()=>{

    //if you look in the CSS, theres a section where nav has a class called black..this add and removes that class.
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})