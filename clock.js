const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

setUI();
setClock();
setInterval(setClock, 1000);

function setUI() {
    for (let i= 1; i <= 12; i++) {
        set({
            element: 'div', 
            attribute: { class: 'number'}, 
            style: { '--degree': i*30 }, 
            innerHTML: i
        });
    }
    for (let i= 1; i <= 60; i++) {
        let height = (i%5 === 0)? 10: 5;
        let width = (i%5 === 0)? 2: 1;
        set({
            element: 'div',
            attribute: { class: 'stick'},
            style: { '--degree': i*6, '--height': height, '--width': width}, 
            innerHTML: ''
        });
    }
}

function set({element, attribute, style, innerHTML}){
    let elt = document.createElement(element);
    for(i in attribute) elt.setAttribute(i, attribute[i]);
    for(i in style) elt.style.setProperty(i, style[i]);
    elt.innerHTML = innerHTML;
    clock.append(elt);
}

function setClock(){
    let current = new Date();
    let secondRatio = current.getSeconds() / 60;
    let minuteRatio = (secondRatio + current.getMinutes()) / 60;
    let hourRatio = (minuteRatio + current.getHours()) / 12;
    rotate(secondHand, secondRatio);
    rotate(minuteHand, minuteRatio);
    rotate(hourHand, hourRatio);
}

function rotate(element, ratio){
    element.style.setProperty('--degree', ratio*360);
}