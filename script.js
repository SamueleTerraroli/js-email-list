//Procedimento logico
/*
1. Importo gli elementi di cui ho bisogno
2. inizializzo, (aggiungo le classi d-none)
3. Ogni qualvolta clicco il bottone chiamo l'api 10 volte
4. Pusho le email ricevute in un array
5. eseeguo una verifica se sono state eseguite tutte le chiamate
6. se Si faccio comparire la classe d-none al loader e stamp le risposte in lista, se No continuo a pushare
*/

// https://flynn.boolean.careers/exercises/api/random/mail API endpoint
//step1
const btn = document.querySelector('.btn');
const mailList = document.querySelector('ul');
const loader = document.querySelector('.loader');
const error = document.querySelector('.message-error');

/*dati*/
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const cap = 10;
let emails=[];

init(); //step 1

btn.addEventListener('click', genMails) //step 2




//step 1
function init(){
    mailList.classList.add('d-none');
    loader.classList.add('d-none');
}

//step3
function genMails(){
    emails=[];
    loader.classList.remove('d-none');
    mailList.innerHTML = '';
    error.innerHTML = '';

    for(let i=0; i < cap; i++){
        axios.get(endpoint)
            .then(res =>{
                emails.push(res.data.response) //step 3
                if(emails.length === cap)/*printFunction*/ //step 4 
         })
        .catch(e => {
            printError(e.message);
        }) 
    }
}

// step 5
function printEmail(){
    loader.classList.add('d-none');
    mailList.classList.remove('d-none');
    emails.forEach(element => mailList.innerHTML += `<li class="list-group-item">${element}</li>`); //step 5
}

function printError(errorMessage){
    loader.classList.add('d-none');
    error.innerHTML = errorMessage;
}