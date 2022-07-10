const result = document.querySelector('.result');
const sumar = document.querySelector('.increase');
const restar = document.getElementById('btn-decrement');
const reset = document.getElementById('btn-reset');

sumar.addEventListener('click', () => {
    result.innerHTML++;
})
restar.addEventListener('click', () => {
    result.innerHTML--;
})
reset.addEventListener('click', () => { 
    result.innerHTML = 0;
})