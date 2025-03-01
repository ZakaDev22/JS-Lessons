// create the main container
let container = document.createElement('main');

// create the cards
let card1 = document.createElement('div');
let card2 = document.createElement('div');
let card3 = document.createElement('div');
let card4 = document.createElement('div');
let card5 = document.createElement('div');
let card6 = document.createElement('div');
let card7 = document.createElement('div');
let card8 = document.createElement('div');
let card9 = document.createElement('div');
let card10 = document.createElement('div');

// create the card titles
let cardTitle1 = document.createElement('h2');
cardTitle1.textContent = 'Card 1';
let cardTitle2 = document.createElement('h2');
cardTitle2.textContent = 'Card 2';
let cardTitle3 = document.createElement('h2');
cardTitle3.textContent = 'Card 3';
let cardTitle4 = document.createElement('h2');
cardTitle4.textContent = 'Card 4';
let cardTitle5 = document.createElement('h2');
cardTitle5.textContent = 'Card 5';
let cardTitle6 = document.createElement('h2');
cardTitle6.textContent = 'Card 6';
let cardTitle7 = document.createElement('h2');
cardTitle7.textContent = 'Card 7';
let cardTitle8 = document.createElement('h2');
cardTitle8.textContent = 'Card 8';
let cardTitle9 = document.createElement('h2');
cardTitle9.textContent = 'Card 9';
let cardTitle10 = document.createElement('h2');
cardTitle10.textContent = 'Card 10';

// create the card content
let cardContent1 = document.createElement('p');
cardContent1.textContent = 'This is the content for card 1.';
let cardContent2 = document.createElement('p');
cardContent2.textContent = 'This is the content for card 2.';
let cardContent3 = document.createElement('p');
cardContent3.textContent = 'This is the content for card 3.';
let cardContent4 = document.createElement('p');
cardContent4.textContent = 'This is the content for card 4.';
let cardContent5 = document.createElement('p');
cardContent5.textContent = 'This is the content for card 5.';
let cardContent6 = document.createElement('p');
cardContent6.textContent = 'This is the content for card 6.';
let cardContent7 = document.createElement('p');
cardContent7.textContent = 'This is the content for card 7.';
let cardContent8 = document.createElement('p');
cardContent8.textContent = 'This is the content for card 8.';
let cardContent9 = document.createElement('p');
cardContent9.textContent = 'This is the content for card 9.';
let cardContent10 = document.createElement('p');
cardContent10.textContent = 'This is the content for card 10.';

// create the card images
let cardImage1 = document.createElement('img');
cardImage1.src = '/img/littel panda.jpg';
let cardImage2 = document.createElement('img');
cardImage2.src = '/img/littel panda.jpg';
let cardImage3 = document.createElement('img');
cardImage3.src = '/img/littel panda.jpg';
let cardImage4 = document.createElement('img');
cardImage4.src = '/img/littel panda.jpg';
let cardImage5 = document.createElement('img');
cardImage5.src = '/img/littel panda.jpg';
let cardImage6 = document.createElement('img');
cardImage6.src = '/img/littel panda.jpg';
let cardImage7 = document.createElement('img');
cardImage7.src = '/img/littel panda.jpg';
let cardImage8 = document.createElement('img');
cardImage8.src = '/img/littel panda.jpg';
let cardImage9 = document.createElement('img');
cardImage9.src = '/img/littel panda.jpg';
let cardImage10 = document.createElement('img');
cardImage10.src = '/img/littel panda.jpg';

// bring the images together
let images = document.getElementsByTagName('img');
// give each card a class and style
for (let img of images) {
    img.setAttribute('class', 'img');
}

// append the card titles, content, and images to the cards
card1.appendChild(cardTitle1);
card1.appendChild(cardContent1);
card1.appendChild(cardImage1);

card2.appendChild(cardTitle2);
card2.appendChild(cardContent2);
card2.appendChild(cardImage2);

card3.appendChild(cardTitle3);
card3.appendChild(cardContent3);
card3.appendChild(cardImage3);

card4.appendChild(cardTitle4);
card4.appendChild(cardContent4);
card4.appendChild(cardImage4);

card5.appendChild(cardTitle5);
card5.appendChild(cardContent5);
card5.appendChild(cardImage5);

card6.appendChild(cardTitle6);
card6.appendChild(cardContent6);
card6.appendChild(cardImage6);

card7.appendChild(cardTitle7);
card7.appendChild(cardContent7);
card7.appendChild(cardImage7);

card8.appendChild(cardTitle8);
card8.appendChild(cardContent8);
card8.appendChild(cardImage8);

card9.appendChild(cardTitle9);
card9.appendChild(cardContent9);
card9.appendChild(cardImage9);

card10.appendChild(cardTitle10);
card10.appendChild(cardContent10);
card10.appendChild(cardImage10);

// append the cards to the container
container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card3);
container.appendChild(card4);
container.appendChild(card5);
container.appendChild(card6);
container.appendChild(card7);
container.appendChild(card8);
container.appendChild(card9);
container.appendChild(card10);

// style the container
container.style.width = '100%';
container.style.backgroundColor = 'lightblue';
container.style.padding = '20px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-around';


// append the container to the body
document.body.appendChild(container);


// bring the cards together
let cards = document.getElementsByTagName('div');

// give each card a class and style
for (let card of cards) {
    card.setAttribute('class', 'card');
}

// style the cards
let cardClass = document.getElementsByClassName('card');

for (let card of cardClass) {

    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.width = '200px';
    card.style.height = '200px';
    card.style.border = '1px solid black';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.backgroundColor = 'lightblue';
}

// style the card images
let imgClass = document.getElementsByTagName('img');
for (let img of imgClass) {
    img.style.width = '150px';
    img.style.height = '150px';
    img.style.border = '1px solid black';
    img.style.margin = '10px';
    img.style.padding = '10px';
}