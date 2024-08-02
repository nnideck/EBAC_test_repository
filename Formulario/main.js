const form = document.querySelector('form');
const mensagemValidacao = document.querySelector('span');
const botao = document.querySelector('button');
const inputA = document.querySelector("#nmb1");
const inputB = document.querySelector("#nmb2");

let formValido = false;

const msgmFormAceito = "Seu formulário está <b>correto</b>!";
const msgmFormErro = "Seu formulário está <b>incorreto</b>! Revise as informações.";

form.addEventListener('submit', (e) => {e.preventDefault()})

function validarInput(){
    if (inputB.value > inputA.value) {
        formValido = true;
        } else {
        formValido = false
        }
}

botao.addEventListener ('click', (e) => {
    validarInput();
    if (formValido) {
        mensagemValidacao.classList.add ('succeded')
        mensagemValidacao.innerHTML = msgmFormAceito
        inputA.value = ""
        inputB.value = ""
    } else {
        mensagemValidacao.classList.add ('error')
        mensagemValidacao.innerHTML = msgmFormErro
    }
})
