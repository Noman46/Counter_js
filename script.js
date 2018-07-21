let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCounterBtn');
const lowCount = document.querySelector('#lowerCounterBtn');
const setZero = document.querySelector('#setZero');


addCount.addEventListener('click', countPlus);
let count=0;

function countPlus(){
	count++;
	counter.innerHTML=count;
	if(counter.innerHTML>'0'){
		counter.style.color='green';
	}
	else if(counter.innerHTML==='0'){
		counter.style.color='white';
	}
		/*if(count ==2){
	alert('yea');*/

}

}


lowCount.addEventListener('click', countMinus);

function countMinus(){
	count--;
	counter.innerHTML=count;
	if(counter.innerHTML<'0'){
		counter.style.color='red';
	}
	else if(counter.innerHTML==='0'){
		counter.style.color='white';
	}

}


setZero.addEventListener('click', reset);
function reset(){
	count=0;
	counter.innerHTML=0;
	if(counter.innerHTML==='0'){
		counter.style.color='white';
	}
}
