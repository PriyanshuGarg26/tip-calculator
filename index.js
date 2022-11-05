const bill = document.getElementById('input');
const customTip = document.getElementById('customTip');
const peopleCount = document.getElementById('people');
const btn = document.querySelectorAll('.btn');
const totalValue = document.querySelector('.total-value');
const tipAmount = document.querySelector('.tip_amount-value');
const reset = document.querySelector('.reset')

let currentIndex = 0;
let tippercent = 0;
let bills = 0;
reset.addEventListener('click', handleReset);
customTip.addEventListener('input', customTipCalc);
bill.addEventListener('input', function (event) {
    bills = bill.value;
    calculate();
});
peopleCount.addEventListener('input', calculate);
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {

        btn[currentIndex].classList.remove('active');
        if (event.target.innerHTML === btn[i].innerHTML) {
            btn[i].classList.add('active');
            currentIndex = i;
        }
        tippercent = btn[i].innerHTML.slice(0, -1);
        customTip.value = '';
        calculate();
    })
};

function customTipCalc() {
    tippercent = customTip.value;
    btn[currentIndex].classList.remove('active');
    if (tippercent > 0) {
        calculate();
    };
}
function calculate() {
    peopleCount.style.outlineColor = 'hsl(172, 67%, 45%)';
    if (peopleCount.value > 0) {
        document.querySelector('#error').textContent = '';
        tip = parseInt(tippercent);
        tipValue = bills * (tip / 100) / peopleCount.value;
        total = bills * (1 + tip / 100) / peopleCount.value;
        tipAmount.innerHTML = `\$${tipValue.toFixed(2)}`;
        // totalValue.innerHTML = '$ ' + total.toFixed(2);
        totalValue.innerHTML = `\$${total.toFixed(2)}`;
    }
    else {
        document.querySelector('#error').textContent = 'Can\' be zero';
        peopleCount.style.outlineColor = 'red';

    }
}

function handleReset() {
    bill.value = '';
    btn[currentIndex].classList.remove('active');
    peopleCount.value = '';
    customTip.value = '';
    tipAmount.innerHTML = '$0.00';
    totalValue.innerHTML = '$0.00';
}