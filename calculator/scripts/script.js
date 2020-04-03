'use strict';

function calc(operator) {

	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let res = document.getElementById('result');

	switch (operator) {
	case '+':
		res.textContent = num1 + num2;
		break;

	case '-':
		res.textContent = num1 - num2;
		break;

	case '*':
		res.textContent = num1 * num2;
		break;

	case '/':
		if(num2 === 0){
			res.textContent = 'ゼロで割ることは出来ません';
		}else{
			res.textContent = num1 / num2;
		}
		break;
	default:
		res.textContent = 'error';
		break;
	}
	
}

document.getElementById('btn-add').onclick = function(){
	calc('+');
};

document.getElementById('btn-sub').onclick = function(){
	calc('-');
};

document.getElementById('btn-mul').onclick = function(){
	calc('*');
};

document.getElementById('btn-div').onclick = function(){
	calc('/');
};