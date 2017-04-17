$(document).ready(function() {
  $('.home__content').hide();
  $('.home__content').fadeIn(1000);
});

$(document).ready(function() {
  $('.about__content').hide();
  $('.about__content').fadeIn(300);
});

$(document).ready(function() {
  $('.skills__content').hide();
  $('.skills__content').fadeIn(1000);
});

$(document).ready(function() {
  $('#exp').hide();
  $('#exp').fadeIn(1000);
});

$('.first.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#FF5F6D', '#FFC371']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Sociability' + '<br>' + '81%');
});

$('.second.circle').circleProgress({
  value: 0.7,
  size: 180
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Initiative' + '<br>' + '73%');
});

$('.third.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#D38312', '#A83279']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Educability' + '<br>' + '85%');
});

$('.four.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#FDFC47', '#24FE41']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Independence' + '<br>' + '79%');
});

$('.five.circle').circleProgress({
  value: 1,
  size: 180,
  fill: {gradient: ['#ff1e41', '#ff5f43']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Ambition' + '<br>' + '110%');
});

$('.six.circle').circleProgress({
  value: 0.7,
  size: 180,
  fill: {gradient: ['#F09819', '#EDDE5D']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Responsibility' + '<br>' + '74%');
});

///// parseInt(100 * progress)

var canvas = document.getElementById("canvas");
var cont = canvas.getContext("2d");

var data = [ 100, 145, 125, 160, 130 ]; 

cont.fillStyle = "#eeeeee";
cont.fillRect(10, 20, 580, 370);
cont.fillStyle = "#E04863";
for (var i = 0; i < data.length; i++) {
  var s = data[i];
  cont.fillRect(25 + i * 120, 385 - s * 2, 65, s * 2);
}

cont.fillStyle = "black";
cont.font = "16pt sans-serif";
cont.fillText("Leadership", 5, 140);
cont.fillText("skills", 35, 160);
cont.fillText("Industriousness", 100, 70);
cont.fillText("Organizational ", 230, 100);
cont.fillText("skills", 275, 120);
cont.fillText("Stress", 390, 40);
cont.fillText("resistance", 370, 60);
cont.fillText("Attentiveness", 465, 100);

////////////////////////////

jQuery(document).ready(function($) {
    //store service items
    var fillingBlocks = $('.cd-service').not('.cd-service-divider');

    //store service items top position into an array
    var topValueFillingBlocks = [];
    fillingBlocks.each(function(index){
        var topValue = $(this).offset().top;
        topValueFillingBlocks[topValueFillingBlocks.length] = topValue;
    });

    //add the .focus class to the first service item
    fillingBlocks.eq(0).addClass('focus');

    $(window).on('scroll', function(){
        //check which service item is in the viewport and add the .focus class to it
        updateOnFocusItem(fillingBlocks.slice(1));
        //evaluate the $(window).scrollTop value and change the body::after and body::before background accordingly (using the new-color-n classes)
        bodyBackground(topValueFillingBlocks);
    });
});

function updateOnFocusItem(items) {
    items.each(function(){
        ( $(this).offset().top - $(window).scrollTop() <= $(window).height()/2 ) ? $(this).addClass('focus') : $(this).removeClass('focus');
    });
}

function bodyBackground(itemsTopValues) {
    var topPosition = $(window).scrollTop() + $(window).height()/2,
        servicesNumber = itemsTopValues.length;
    $.each(itemsTopValues, function(key, value){
        if ( (itemsTopValues[key] <= topPosition && itemsTopValues[key+1] > topPosition) || (itemsTopValues[key] <= topPosition && key+1 == servicesNumber ) ) {    
            $('body').removeClass('new-color-'+(key-1)+' new-color-'+(key+1)).addClass('new-color-'+key);
        }
    });
}

///////////////////////////////////

jQuery(document).ready(function($){
    var gallery = $('.cd-gallery'),
        foldingPanel = $('.cd-folding-panel'),
        mainContent = $('.cd-main');
    /* open folding content */
    gallery.on('click', 'a', function(event){
        event.preventDefault();
        openItemInfo($(this).attr('href'));
    });

    /* close folding content */
    foldingPanel.on('click', '.cd-close', function(event){
        event.preventDefault();
        toggleContent('', false);
    });
    gallery.on('click', function(event){
        /* detect click on .cd-gallery::before when the .cd-folding-panel is open */
        if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
    })

    function openItemInfo(url) {
        var mq = viewportSize();
        if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
            /* if content is visible above the .cd-gallery - scroll before opening the folding panel */
            $('body,html').animate({
                'scrollTop': gallery.offset().top
            }, 100, function(){ 
                toggleContent(url, true);
            }); 
        } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
            /* if content is visible below the .cd-gallery - scroll before opening the folding panel */
            $('body,html').animate({
                'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
            }, 100, function(){ 
                toggleContent(url, true);
            });
        } else {
            toggleContent(url, true);
        }
    }

    function toggleContent(url, bool) {
        if( bool ) {
            /* load and show new content */
            var foldingContent = foldingPanel.find('.cd-fold-content');
            foldingContent.load(url+' .cd-fold-content > *', function(event){
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
                
            });
        } else {
            /* close the folding panel */
            var mq = viewportSize();
            foldingPanel.removeClass('is-open');
            mainContent.removeClass('fold-is-open');
            
            (mq == 'mobile' || $('.no-csstransitions').length > 0 ) 
                /* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
                ? $('body').removeClass('overflow-hidden')
                
                : mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    $('body').removeClass('overflow-hidden');
                    mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                });
        }
        
    }

    function viewportSize() {
        /* retrieve the content value of .cd-main::before to check the actua mq */
        return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    }
});

