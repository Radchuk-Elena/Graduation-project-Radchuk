$('document').ready(function(){
	$('.tabs .tabs_header').on('click', function (){
		$('.tabs .tabs_header') .not(this) .next() .slideUp(700);
		$(this) .next() .slideToggle(1000);
		$('.tabs .tabs_header') .css('color', '#4999af')
		$(this) .css('color', '#f1715e')
	});
});



