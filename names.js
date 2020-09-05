const a = ['Affe', 'Anglizismus', 'Alligator', 'Anfänger', 'Allergikerin', 'Angst', 'Apfelbaum', 'Automobil', 'Agnostiker', 'Augenarzt', 'Alarm', 'Angler', 'Apothekerin', 'Analphabet']

const f = ['frisst', 'fordert', 'findet', 'fingert', 'fürchtet', 'für', 'fürchtet', 'fingiert', 'filetiert', 'füllt', 'furzt', 'fällt', 'fasst', 'fühlt', 'festigt']

const d = ['Dosenfleisch', 'Düsenjets', 'Deppen', 'Dusche', 'Dürre', 'Darmspiegelung', 'Dachsbau', 'Dünger', 'Degen', 'Deckel', 'Drogen', 'Dünnpfiff', 'Dunkelheit', 'Dienstplan', 'Dermatologe', 'Delle', 'Darbietungen', 'Dornen', 'Dackel']

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
    var textField = document.getElementById("afdField");
    let textContent = "<div class='afdResults'>".concat(genName(), "</div>");
    textField.innerHTML = textContent;
}