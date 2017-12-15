const button = document.getElementById('button');
let square_one = document.querySelector('.square-one')
let square_two = document.querySelector('.square-two')
let square_three = document.querySelector('.square-three')

const switch_state =()=>{
    square_one.classList.toggle('square-one--extend');
    square_two.classList.toggle('square-two--extend');
    square_three.classList.toggle('square-three--extend');
};

const switch_state_one =()=>{
    square_one.classList.toggle('square-one--extend');
    square_two.classList.toggle('square-two--extend');
    square_three.classList.toggle('square-three--extend');
};

const switch_state_two =()=>{
    square_one.classList.toggle('square-one--extend');
    square_two.classList.toggle('square-two--extend');
    square_three.classList.toggle('square-three--extend');
};

const switch_state_three =()=>{
    square_one.classList.toggle('square-one--extend');
    square_two.classList.toggle('square-two--extend');
    square_three.classList.toggle('square-three--extend');
};


square_one.addEventListener('click', switch_state_one);
square_two.addEventListener('click', switch_state_two);
square_three.addEventListener('click', switch_state_three);
button.addEventListener('click', switch_state);
