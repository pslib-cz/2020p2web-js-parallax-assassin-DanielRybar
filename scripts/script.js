
var background = document.getElementsByClassName("layer-background")[0]; //pozadí
var man = document.getElementsByClassName("layer-man")[0]; //postava
var stones = document.getElementsByClassName("layer-1")[0]; //kameny
var mountain = document.getElementsByClassName("layer-2")[0]; //hora
var road = document.getElementsByClassName("layer-4")[0]; //cesta
        
window.onscroll = parallax = () => { //navázání na událost onscroll
    background.style.top = -window.scrollY * 0.4 + "px"; //posun pozadí nahoru
    man.style.left = -window.scrollY * 4.2 + "px"; //posun postavy vlevo
    stones.style.top = -window.scrollY * 0.4 + "px"; //posun kamenů nahoru
    mountain.style.top = window.scrollY * 0.5 + "px"; //posun hory dolů
    road.style.top = -window.scrollY + "px"; //posun cesty nahoru
}