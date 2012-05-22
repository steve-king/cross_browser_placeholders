//--------------------------------//
// Cross Browser Placeholder Text.//
//--------------------------------//
if (!Modernizr.input.placeholder){

	// Make field value equal to placeholder attribute
	$('input[placeholder], textarea[placeholder]').each(function(){
		$(this).val($(this).attr('placeholder'));
		$(this).addClass('placeholder'); // add CSS class for text color
	});
	
	// On focus, remove placeholder text if unchanged
	$('input[placeholder], textarea[placeholder]').focus(function(){
		if($(this).val() == $(this).attr('placeholder')){
			$(this).val('');
			$(this).removeClass('placeholder');
		}
	});
	
	// On blur (unfocus), re-insert placeholder text if nothing has been entered
	$('input[placeholder], textarea[placeholder]').blur(function(){
		if($(this).val() == ''){
			$(this).val($(this).attr('placeholder'));
			$(this).addClass('placeholder');
		}
	});
}

// Form input:focus state
$('input[type="text"]').focus(function(){ 
	$(this).addClass('focus');
});  

$('input[type="textarea"]').focus(function(){ 
	$(this).addClass('focus');
});  	

$('input[type="text"]').focusout(function(){
	$(this).removeClass('focus');
});	
$('input[type="textarea"]').focusout(function(){
	$(this).removeClass('focus');
});