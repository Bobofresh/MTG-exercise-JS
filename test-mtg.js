var creatureCard = document.getElementById('creature-card');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    var requestBtn = new XMLHttpRequest();
    requestBtn.open('GET','https://api.magicthegathering.io/v1/cards');
    requestBtn.onload = function() {
        var cardData = JSON.parse(requestBtn.responseText);
        renderHTML(cardData);
        console.log(cardData);
    };
    requestBtn.send();
});

function renderHTML(data) {
    var htmlString = 'names';

    for (i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + ' is a ' + data[i].type + '</p>';
    }
}
    creatureCard.insertAdjacentHTML('beforeend', htmlString);


var mtg = require('mtgsdk');

// Get all cards
mtg.card.all()
    .on('data', function (cards) {
        console.log(cards.name)
    });

// Filter Cards
mtg.card.all({ supertypes: 'legendary', types: 'creature', colors: 'red,white' })
    .on('data', function (card) {
        console.log(card.name)
    });

// Get cards on a specific page / pageSize
/*
mtg.card.where({ page: 50, pageSize: 50})
    .then(cards => {
    console.log(cards[0].name)
})*/
