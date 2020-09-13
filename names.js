const a = ['Astronaut', 'Anatomie','Affäre', 'Affe', 'Anglizismus', 'Alligator', 'Anfänger', 'Allergikerin', 'Angst', 'Apfelbaum', 'Automobil', 'Agnostiker', 'Augenarzt', 'Alarm', 'Angler', 'Apothekerin', 'Analphabet', 'Alge', 'Alter', 'Arm', 'Atlas', 'Abfall', 'Akrobat']

const f = ['frisst', 'fordert', 'findet', 'fingert', 'fürchtet', 'für', 'fürchtet', 'fingiert', 'filetiert', 'füllt', 'furzt', 'fällt', 'fasst', 'fühlt', 'festigt', 'fabuliert', 'fabriziert', 'fälscht', 'färbt', 'faltet', 'fasziniert', 'fegt', 'forciert', 'fesselt', 'fertigt', 'fettet']

const d = ['Doppelgänger', 'Dudelsack', 'Dummheit', 'Dosenfleisch', 'Düsenjets', 'Deppen', 'Dusche', 'Dürre', 'Darmspiegelung', 'Dachsbau', 'Dünger', 'Degen', 'Deckel', 'Drogen', 'Dünnpfiff', 'Dunkelheit', 'Dienstplan', 'Dermatologe', 'Delle', 'Darbietungen', 'Dornen', 'Dackel', 'Dinosaurier', 'Dystopie']

var currentName = "Try the AfDNameCreator!"

function selectRandom(_list) {
    let rnd = Math.floor(Math.random() * _list.length);
    return _list[rnd]
}

function genName() {
    currentName = selectRandom(a).concat(" ", selectRandom(f), " ", selectRandom(d))
    return currentName
}

function genTweetButton() {
    var tweetButton = document.createElement("a");
    tweetButton.classList += "twitter-share-button";
    tweetButton.innerHTML = "Tweet"
    tweetButton.id = "tweetButton"
    tweetButton.setAttribute("data-size", "large")
    tweetButton.setAttribute("data-text", currentName)
    tweetButton.setAttribute("data-hashtags", "AfD,washeißteigentlichafd,afdnamegenerator")
    tweetButton.setAttribute("data-url", "https://afdnamegenerator.github.io/")
    tweetButton.setAttribute("data-lang", "de")
    tweetButton.setAttribute("data-show-count", "false")
    return tweetButton
}

function setText() {
    let textField = document.getElementById("afdField");
    let textContent = "<div class='afdResults'>".concat(genName(), "</div>");
    textField.innerHTML = textContent;
    if (document.getElementById("afdTweetButtonContainer")) {
        var oldButton = document.getElementById("afdTweetButtonContainer")
        oldButton.parentNode.removeChild(oldButton)
    };
    var afdTweetButtonContainer = document.createElement("div");
    afdTweetButtonContainer.id = "afdTweetButtonContainer"
    document.getElementById("afdTweetContainer").appendChild(afdTweetButtonContainer);
    if (window.twttr) {
        document.getElementById("afdTweetButtonContainer").appendChild(genTweetButton());
        twttr.widgets.load();
    }
}