const text = document.getElementById('texto');
const cap = document.getElementById('captura');
const mandar = document.getElementById('mandar');
const form = document.getElementById('form')

function mostrartexto(event){
    event.preventDefault();
    const palavras = text.value;
    cap.textContent = palavras;
    text.value=''
};

mandar.addEventListener('click', mostrartexto);
