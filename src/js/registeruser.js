$(document).ready(function() {
	
	$('#continue-btn').on('click', function(){
		var userid = $('#userid').val();
		var phone = parseInt(userid);
		var terms = $('input#terms_and_con').is(':checked');

		if (phone || terms !== undefined){
			$.ajax({
				url: '/api/registerNumber',
				type: 'POST',
				dataType: 'json',
				data: {phone,terms}
			})
			.done(function(res) {
				console.log(res);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});

		}else{
			console.log('debe ingresar número telefonico y aceptar terminos y condiciones');
		}


	});

});
