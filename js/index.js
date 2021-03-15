var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

function newProject() {
    let namefile = window.location.href.split(/(\\|\/)/g).pop();
    let todel = namefile.substr(namefile.indexOf("."))
    var id = namefile.replace(todel, '')
    let newId = parseInt(id)+1;
    window.location = newId+".html";   
}

function backProject() {
    let namefile = window.location.href.split(/(\\|\/)/g).pop();
    let todel = namefile.substr(namefile.indexOf("."));
    var id = namefile.replace(todel, '');
    if (parseInt(id) == 1) {
        window.location = "../personal.html";
        return;
    }
    let newId = parseInt(id)-1;
    window.location = newId+".html";   
}
