app.on('init', () => {
	let $this = $('.advantages');
	if ($this.length) {
		owlCarouselFacade($this.find('.advantages__list'), {
			items: 1,
			margin: 30,
			dots: false,
			onInitialized: counter,
			onTranslated: counter,
			navigation: false,
		}, ['xs'], $this.find('.owl-arrows__prev'), $this.find('.owl-arrows__next'));
	}


	function counter(event) {
		var element = event.target;
		var items = event.item.count;
		var item = event.item.index + 1;
		$('.advantages__count').html(item+"/"+items);
	}
});