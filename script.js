const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');
const textName = document.querySelector('#text-name');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const getStyle = (element, style) => 
    window.getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    bgColor: getStyle(html, '--bg-color'),
    colorText: getStyle(html, '--color-text'),
    tilteColor: getStyle(html, '--tilte-color'),
    btnHover:getStyle(html, 'btn-hover'),
    colorHeadings:getStyle(html, '--color-headings'),
    colorSocial:getStyle(html, '--color-social')
}

const darkMode = {
    bgColor: '#121212',
    colorText: '#F1F1F1',
    tilteColor: '#',
    btnHover: '#',
    colorHeadings: '#362a6c',
    colorSocial: '#f1f1f1'
}

const transformKey = key => 
"--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}

function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML= ''; 
    textArray.forEach((letra, i) => {
        setTimeout( () => elemento.innerHTML += letra, 75 * i)
    });
}

typeWriter(textName);