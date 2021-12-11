
const decrement = document.querySelectorAll('[data-action="decrement"]');
const increment = document.querySelectorAll('[data-action="increment"]');
const onValue = document.querySelector('#value');

const counterValue = 0;

    const clickDecrement = () => {
    counterValue -= 1;
        onValue.textContent = counterValue;
    };


    const clickIncrement = () => {
    counterValue += 1;
        onValue.textContent = counterValue;
};
    


 decrement.addEventListener('click', clickDecrement);
 increment.addEventListener('click', clickIncrement);


