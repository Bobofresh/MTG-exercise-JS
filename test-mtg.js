/* Magic the Gathering Card display exercise */
/*
1. Display the results in a “card” format, where the cards flow from left to right
    across the width of the screen and then down to the next row creating as many rows as necessary.
2. Each card should display: image, name, artist, set name, and original type. You may also display additional fields.
3. The card’s image should be displayed prominently. How and when the other data is displayed is up to you.
4. Use a responsive design. The cards should reflow as-needed based on the size of the browser window.
    You may limit the maximum display area but may not use a fixed width.
5. As the user scrolls down the page, additional cards should be loaded and appended.
    (This method of displaying results is often referred to as “infinite scroll.”)
6. Include a page header. You may also include additional layout elements at your discretion.
7. Display a loading indicator when communicating with the API.

*/
var creatureCard = document.getElementById('creature-card');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    var requestBtn = new XMLHttpRequest();
    requestBtn.open('GET','https://api.magicthegathering.io/v1/cards');
    // requestBtn.open('GET','test-mtg.js'); /* I tried it this way as well, but I was getting error blocked by CORS policy */
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
