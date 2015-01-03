$(function () {

	$('#loginform').submit(postLoginForm);

});



var postLoginForm = function () {
	$.post($(this).attr('action'), $(this).serialize(),
		function (result) {
			console.log(result);
			if (result.message) {
				alert(result.message);
				$("input[name='username']").val("");
				$("input[name='password']").val("");
				$("input[name='rememberme']").val("");
			} else {
				if (result.cookie == 1) {
					var option = {
						username: result.username,
						password: result.password
					};
					$.cookie('login', JSON.stringify(option), {
						expires: new Date(Date.now() + 900000),
						httpOnly: true
					});
				} else
					$.removeCookie('login');

				window.location.href = $('#loginform').attr('data-nextUrl');
			}
		});
	return false;
}