const inp = document.querySelector('input');
const result = document.querySelector('.result');

inp.oninput = () => {
    result.style.display = 'none';
}

const urlForm = document.querySelector('#urlForm');
const endPoint = 'http://localhost:8000';

urlForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(urlForm);
    let formObject = Object.fromEntries(formData);

    let queryUrl = `${endPoint}/api/`;
    
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formObject)
    };

    try {
        let response = await fetch(queryUrl, options);
        if (response.status === 500) handleFail()
        else if (response.status === 400) await handleDuplicate(response)
        else {
            let data = await response.json();
            displayUrl(data);
        }
    } catch (e) {

    }
} 

function displayUrl(data) {
    clearInput();
    result.style.display = '';

    let display = result.querySelector('a');

    let href = data.tiny;

    display.setAttribute('href', href);
}

const clearInput = () => {
    inp.value = '';
}

function handleFail() {
    clearInput();
    const fail = document.querySelector('.fail');

    fail.textContent = "Please enter a valid url";
    fail.style.display = '';

    setTimeout(() => fail.style.display = 'none', 5000);
}

async function handleDuplicate(response) {
    let data = await response.json();
    let message = data.source[0];

    clearInput();
    const fail = document.querySelector('.fail');

    fail.textContent = message;
    fail.style.display = '';

    setTimeout(() => fail.style.display = 'none', 5000);
}