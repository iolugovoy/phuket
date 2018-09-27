app.on('init', () => {

	let dp = $('.datepicker-here').datepicker({
		range: true,
	});
	var datepickerInst = $('.datepicker-here').datepicker().data('datepicker');

	$('.datepicker').append('<button type="button" class="datepicker--apply-btn">Применить</button>');
	let applyBtn = $('.datepicker--apply-btn');
	applyBtn.click(function(){
		datepickerInst.hide();
	})
	
	let minRent = $('.datepicker-here').attr('data-min-rent');
	if (minRent != undefined){
		let minRentText = '<div class="datepicker--min-rent">' + minRent + '&nbsp;дней<div> минимальный срок аренды</div></div>';
		$('.datepicker').append(minRentText);
	}
	

});