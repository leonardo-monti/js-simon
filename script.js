const numbersList = document.getElementById('numbers-list');
const countdown = document.getElementById('countdown');
const form = document.getElementById('answers-form');
const message = document.getElementById('message');
const inputs = document.querySelectorAll('#input-group input');

function generatore() {
    let contenitore = []
    for (let i = 0; contenitore.length < 5; i++) {
        let n = Math.floor(Math.random() * 50) + 1;
        if (!contenitore.includes(n)) {
            contenitore.push(n);
        }
    }
    return contenitore
}

let numeri = generatore();

numeri.forEach(element => {
    const li = document.createElement(`li`)
    li.textContent = element
    numbersList.appendChild(li)
});

let time = 30
const timer = setInterval(() => {
    countdown.textContent = time;
    time--;
    if (time < 0) {
        clearInterval(timer);
        numbersList.classList.add('d-none');

        form.classList.remove('d-none');

        countdown.textContent = 'Inserisci i numeri';
    }
}, 1000);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userNumbers = [];

    inputs.forEach(input => {
        userNumbers.push(parseInt(input.value));
    })

    const indovinati = []

    numeri.forEach(num => {
        if (userNumbers.includes(num)) {
            indovinati.push(num);
        }

    });
    message.textContent =
        `Hai indovinato ${indovinati.length} numeri: ${indovinati.join(', ')}`;
});