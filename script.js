let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.getElementById('main-title').textContent="Dom's Homepage";

  // Part 2
document.querySelector('body').style.backgroundColor= 'blue';

  // Part 3
  const domFavThings = document.getElementById('favorite-things');
   domFavThings.removeChild(domFavThings.lastElementChild);
  document.getElementById('favorite-things').lastElementChild.remove();

  // Part 4
 const specialTitle = document.querySelectorAll('.special-title');
  for (let title of specialTitle) {
      title.style.fontsize = '2rem'
  }
 document.getElementsByClassName('specialTitle').fontsize="2rem";

  // Part 5
 const pastRace = document.getElementById('past-races');
 pastRace.removeChild(pastRace.children[3]);
 document.getElementById('past-races').removeChild(document.getElementById('past-races').children[3]);

 //Creating New DOM Elements
  // Part 6

   const newPastList = document.createElement('li');
   newPastList.textContent = 'Accra';
   document.getElementById('past-races').appendChild(newPastList);

  document.getElementById('past-races').appendChild(document.createElement('li'));


  // Part 7
const newDivElement = document.createElement('div');
const mainDiv = document.querySelector('.main');

newDivElement.classList.add('blog-post');

const h2Element = document.createElement('h2');
const pElement = document.createElement('p');

h2Element.textContent = 'Accra';
pElement.textContent = 'It Keeps Getting Better!'

mainDiv.appendChild(newDivElement);
newDivElement.appendChild(h2Element);
newDivElement.appendChild(pElement);


// Event Handlers
  // Part 8
//  const randomQuote = function() {
 // document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
//}; // repeated from line 12
randomQuote();
  const randomQuoteElement = document.getElementById("quote-title");
randomQuoteElement.addEventListener('click', (_event)=>{
  randomQuote()
});


  // Part 9

  const blogPostElement = document.querySelectorAll(".blog-post");
    blogPostElement.forEach((item)=>{
      item.addEventListener("mouseout",(_event)=>{
        item.classList.toggle("purple");
      })
      item.addEventListener("mouseenter", (_event)=>{
        item.classList.toggle("red");
      })
    })


});
