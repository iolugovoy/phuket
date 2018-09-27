app.on('init', () => {
    let $this = $('.review');
    let $thumb = $('.review__pagination');
    if ($this.length) {
        owlCarouselFacade($this.find('.review__sli-list'), {
            items: 1,
            dots: false,
            nav: false,
        },['xs','sm','md','lg','xl','ml'], $this.find('.owl-arrows__prev'), $this.find('.owl-arrows__next'));     
    }

    if($thumb.length){
        owlCarouselFacade($this.find('.review__pag-list'), {
            items: 4,
            margin: 0,
            dots: false,
            nav: false,
        },['xs','sm','md','lg','xl','ml']);     
    }

    let carousel = $this.find('.review__pag-list');

    let thumbs = $thumb.find('.owl-item');
    $(thumbs[0]).addClass('current');
    $(thumbs).each(function(index){
        $(this).click(function(){
            $this.find('.review__sli-list').trigger('to.owl.carousel', index);
            var activePags = $('.review__pag-list .owl-item.active');
            if($(this) == activePags[0]){
                carousel.trigger('prev.owl.carousel');
            }
        })
    });
    $this.find('.review__sli-list').on('changed.owl.carousel', function(event) {
        
        let current = event.item.index;
        carousel.trigger('to.owl.carousel', current);
        $(thumbs).removeClass('current');
        $(thumbs[current]).addClass('current');
    });


});