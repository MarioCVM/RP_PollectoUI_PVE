let list = document.querySelectorAll('.navigation li');
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let popup = document.getElementById('popup');

//menu animation 
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

//menu toggle
/*toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}*/

//open-close popup
function openPopup(){
    popup.classList.add('openPopup')
}

function closePopup(){
    popup.classList.remove('openPopup')
}