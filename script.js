const html = document.querySelector('html');
const textName = document.querySelector('#text-name');
const animationClass = 'animate';


function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML= ''; 
    textArray.forEach((letra, i) => {
        setTimeout( () => elemento.innerHTML += letra, 75 * i)
    });
}

typeWriter(textName);