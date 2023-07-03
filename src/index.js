let oracleGod

fetch ("http://localhost:3000/gods")
 .then(res=>res.json())
 .then(data => {
    gods = data;
    gods.forEach(god => {
        godMenu(god)
    });
        godEntry(gods[0]);
        getRandomGod();
        displayRandomGod();
});

const randomizerButton = document.querySelector('#randomizer');
const imageElement = document.querySelector('#oracle-img');
const paragraphElement = document.createElement('p');
//paragraphElement.textContent = 'Take a breath... Click on the sphere below to show the forgoten God that will help you in your journey...';
//paragraphElement.classList.add('overlay-paragraph');
//imageElement.parentNode.insertBefore(paragraphElement, imageElement.nextSibling);


function getRandomGod() {
    return Math.floor(Math.random() * gods.length);
}
function displayRandomGod() {
    paragraphElement.style.display = 'block';
    imageElement.src = 'images/blackpyramidtransparent.gif';

    setTimeout(() => {
    const randomGod = getRandomGod();
    const randomGodImg = gods[randomGod];
    imageElement.src = randomGodImg.image;
    //paragraphElement.style.display = 'none';
}, 1000);
}
randomizerButton.addEventListener('click', displayRandomGod);


function godMenu(god) {
    const menuBar = document.querySelector('#pic-selector')
    menuImg = document.createElement('img')
    menuImg.src = god.image
    menuBar.append(menuImg)
    
    menuImg.addEventListener('click',(e) => {
        godEntry(god)
    })
}

function godEntry(god) {
    oracleGod = god
    let name = document.querySelector('#entry-title')
    name.textContent = god.name
    let image = document.querySelector('#entry-img')
    image.src = god.image
    let description = document.querySelector("#entry-para")
    description.textContent = god.description 
}

