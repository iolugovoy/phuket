app.on('init', () => {
	let $this = $('.offers-slider');
	let innerTree = $this.html();
	function offerCarouselInit(){

		if ($this.length) {
			owlCarouselFacade($this.find('.offers-slider__list'), {
				nestedItemSelector: 'offer-item',
				items: 1,
				margin: 30,
				dots: false,
				nav: false,
				stagePadding: 40,
				responsive:{
					640: {
						stagePadding: 80, 
						nestedItemSelector: false,
						margin: 50
					},
				} 
			}, ['xs', 'sm', 'md', 'lg', 'xl', 'ml'], $this.find('.owl-arrows__prev'), $this.find('.owl-arrows__next'));
		}
	}

	offerCarouselInit();

	app.on('changeScale', () => {
		$this.html(innerTree);
		offerCarouselInit();
	});

});