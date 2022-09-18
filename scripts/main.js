import database from '/scripts/data.json' assert{type: "json"};

const COLORS = {
    'normal':   "#989ca3#",
    'fire':     "#e84520",
    'water':    "#337dff",
    'grass':    "#51ad5b",
    'flying':   "#aa9fe0",
    'fighting': "#d92b4b",
    'poison':   "#7d5199",
    'electric': "#ffb405",
    'ground':   "#e3ad7b",
    'rock':     "#8a7760",
    'psychic':  "#eb7c7c",
    'ice':      "#a4dfdf",
    'bug':      "#7b9c22",
    'ghost':    "#38229c",
    'steel':    "#7b98b3",
    'dragon':   "#03058a",
    'dark':     "#090614",
    'fairy':    "#f792e6"
}

var animals = [];

for (let animal of database) {
    animals.push(
        {
            "name": animal.name,
            "types": animal.types,
            "img": animal.img,
            "desc": animal.desc,
            "specs": animal.specs,
            "att": animal.att
        }
    )
}

var animal = animals[Math.floor(Math.random()*animals.length)];

document.getElementById("name").innerText = animal.name

document.getElementsByClassName("animal-type-icon")[0].children[0].style.backgroundColor = COLORS[animal.types[0]]
document.getElementsByClassName("animal-type-icon")[0].children[1].style.backgroundColor = COLORS[animal.types[1]]

document.getElementsByClassName("animal-bc")[0].style.backgroundImage = `url(${animal.img})`

document.getElementsByClassName("desc")[0].innerText = animal.desc

document.getElementsByClassName("specs")[0].children[0].innerText = "Nome Natura: " + animal.specs[0]
document.getElementsByClassName("specs")[0].children[1].innerText = "Habilidade: " + animal.specs[1]

for (let _ = 0; _ != 6; _++) {
    document.getElementsByClassName("att")[_].innerText = animal.att[_]
}

document.getElementById("footer").style.borderBottomColor = COLORS[animal.types[0]]