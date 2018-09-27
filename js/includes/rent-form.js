app.on('init', () => {

    let unitSelect = $('#timeunit');

    function updatePrice(){
        $('.rent-form__price-el').each(function(){
            $(this).addClass('hidden-price');
            if (unitSelect.val() == $(this).attr('data-time-unit')){
                $(this).removeClass('hidden-price');
            }
        });
    }

    updatePrice();

    unitSelect.on('change', function(){
        updatePrice();
    });
});