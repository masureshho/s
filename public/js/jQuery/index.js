$(function () {
	$('#loginform').submit(function () {
		$.post($(this).attr('action'), $(this).serialize(),
			function (result) {
				if (result.message) {
					alert(result.message);
					$("input[name='username']").val("");
					$("input[name='password']").val("");
					$("input[name='rememberme']").val("");
				} else
					window.location.href = $('#loginform').attr('data-nextUrl');
			});
		return false;
	});
});