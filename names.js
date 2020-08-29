const a = ['Affe', 'Anglizismus', 'Alligator', 'Anfänger']

const f = ['frisst', 'fordert', 'findet', 'fingert', 'fürchtet']

const d = ['Dosenfleisch', 'Düsenjets', 'Deppen', 'Dusche']

var currentName = "Try the AfDNameCreator!"

function selectRandom(_list) {
    let rnd = Math.floor(Math.random() * _list.length);
    return _list[rnd]
}

function genName() {
    currentName = selectRandom(a).concat(" ", selectRandom(f), " ", selectRandom(d))
    return currentName
}

function setText() {
    var textfield = document.getElementById("afdField");
    textfield.innerHTML = "<div class='afdResults'>".concat(genName(), "</div>");
}