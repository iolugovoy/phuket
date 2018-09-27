app.on('init', () => {
        let $this = $('.articles');
        if ($this.length) {
            owlCarouselFacade($this.find('.articles__list'), {
                items: 1,
                margin: 15,
                dots: false,
                nav: false,
                responsive: {
                	0: {
                		items: 1,
                		stagePadding: 20,
                	},
                	640: {
                		items: 2,
                		stagePadding: 50,
                	},
                	960: {
                		items: 3,
                	},
                	1900: {
                		items: 4,
                	},
                }
            }, ['xs', 'sm', 'md', 'lg', 'xl', 'ml'],  $this.find('.owl-arrows__prev'), $this.find('.owl-arrows__next'));
        }
});


//$this.find('.owl-arrows__arrow_prev'), $this.find('.owl-arrows__arrow_next')