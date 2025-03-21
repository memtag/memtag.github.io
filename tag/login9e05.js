$(document).ready(function () {
	$('#login-form').ajaxForm({
		url: '/engine/backend/login.php',
		dataType: 'json',
		success: function (response) {
			var errlabel = document.getElementById('error-label'),
				errlabel_div = document.getElementById('error-label-div'),
				username = document.getElementById('username'),
				password = document.getElementById('password')

               errlabel_div.classList.add('hidden')
               username.classList.remove('is-invalid')
               password.classList.remove('is-invalid')
			switch (response.status) {
				case 'error':
					switch (response.type) {
						case 'wrongpassword':
							password.classList.add('is-invalid')
							errlabel_div.classList.remove('hidden')
							errlabel.innerHTML = '<strong>Вы ввели неверный пароль!</strong>'
							break
						case 'wrongaccount':
							username.classList.add('is-invalid')
							errlabel_div.classList.remove('hidden')
							errlabel.innerHTML = '<strong>Вы ввели неверное имя пользователя или аккаунт несуществует!</strong>'
							break
					}
					break
				case 'success':
					setTimeout(function () {
						window.location.href = 'panel.html'
					}, 500)
					break
			}
		},
	})
})
