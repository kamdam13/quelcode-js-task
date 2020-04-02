'use strict';

function calc(operator) {

	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let res = document.getElementById('result');

	switch (operator) {
	case 0:
		res.textContent = num1 + num2;
		break;

	case 1:
		res.textContent = num1 - num2;
		break;

	case 2:
		res.textContent = num1 * num2;
		break;

	case 3:
		res.textContent = num1 / num2;
		break;
	default:
		res.textContent = 'error';
		break;
	}
	
}

document.getElementById('btn-add').onclick = function(){
	calc(0);
};

document.getElementById('btn-sub').onclick = function(){
	calc(1);
};

document.getElementById('btn-mul').onclick = function(){
	calc(2);
};

document.getElementById('btn-div').onclick = function(){
	calc(3);
};