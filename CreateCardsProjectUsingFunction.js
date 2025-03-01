

let Names = ['John', 'Jane', 'Jim', 'Jack', 'Jill', 'Joe', 'Jenny', 'Jesse', 'Jasmine', 'Jared'];
let ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
let imgSource = 'img/littel panda.jpg';

let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-around';
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';
container.style.margin = '10px';

document.body.appendChild(container);
document.body.style.backgroundColor = '#24e4f4';

 function CreateCard(cardTitle = 'card', cardText = 'card text', cardImage = 'img/littel panda.jpg') {
    let card = document.createElement('div');
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

    let title = document.createElement('h2');
    title.textContent = cardTitle;
    card.appendChild(title);

    let text = document.createElement('p');
    text.textContent = cardText;
    card.appendChild(text);

    let image = document.createElement('img');
    image.src = cardImage;
    image.style.width = '150px';
    image.style.height = '150px';
    image.style.border = '1px solid black';
    image.style.margin = '10px';
    image.style.padding = '10px';
    card.appendChild(image);

    container.appendChild(card);
 }

for (let i = 0; i < Names.length; i++) {
    CreateCard(Names[i], `Age: ${ages[i]}`, imgSource);
}