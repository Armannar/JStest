"use strict";

let password;
let message;
let login = prompt ('Vvedite login', 'User');

if (login == 'admin') {
	password = prompt ('Hello, enter your password')
	
	if (password == '1') {
		message = 'Hello, Boss'
		alert (message)
	} else if (password == '' || password == null){
		message = 'Cancel'
		alert (message)
	} else {
		message = 'Неверный пароль'
		alert (message)
	} ;
	
} else if ((login == false) || (login == null)) {
	message = 'Cancel'
	alert (message)
} else {	
	message = 'Я вас не знаю'
	alert (message)
} ;


