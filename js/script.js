let newsletter = document.getElementById('newsletter');
let allAgree = document.getElementById('agreement-all');

const validate = (event) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agreement1 = document.getElementById('agreement-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (name.value.trim() === '') {
        let error = document.createElement('li');
        error.innerText = 'Uzupełnij poprawnie formularz podając imię i nazwisko';
        errors.appendChild(error);
    }

    if (email.value.trim() === '') {
        let error = document.createElement('li');
        error.innerText = 'Uzupełnij adres e-mail';
        errors.appendChild(error);
    }

    if (!email.value.includes('@')) {
        let error = document.createElement('li');
        error.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(error);
    }

    if (!agreement1.checked) { 
        let error = document.createElement('li');
        error.innerText = 'Zaznacz zgodę marketingową nr.1';
        errors.appendChild(error);
    }

    if(errors.children.length > 0) {
        event.preventDefault();
    }

}

const allAgreements = (event) => {
    let agree1 = document.getElementById('agreement-1');
    let agree2 = document.getElementById('agreement-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletter.addEventListener('submit', validate);
allAgree.addEventListener('change', allAgreements);