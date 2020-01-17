// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// function CreateCard(data){

//     //constructing elements
//     const card = document.createElement('div');
//     const headline = document.createElement('div');
//     const author = document.createElement('div');
//     const photoBox = document.createElement('div');
//     const photo = document.createElement('img');
//     const byAuthor = document.createElement('span');

//     // assigning classes
//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     photoBox.classList.add('img-container');
//     photo.src = data.authorPhoto;

//     //oranizing elements
//     card.appendChild(headline, author);
//     author.appendChild(photoBox, byAuthor);
//     photoBox.appendChild(photo);

//     //adding content
//     headline.textContent = data.headline;
//     byAuthor.textContent = data.authorName;


//     return card;
    
// }

// // make parent for cards
const wall = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {
         //does it work?
        //console.log(response.data.articles);
        //returns array of objects. need to separate objects
        CreateCard1(response.data.articles);
   

    function CreateCard1(obj){
    Object.keys(obj).forEach((key, index) => {
        //console.log(key, obj[key]);
        console.log(CreateCard(obj[key]));
        wall.append(CreateCard(obj[key]));
        })
    }
    })
    .catch(error => {
       console.log("dangnabbit", error);
    })


    function CreateCard(data){

        //constructing elements
        const card = document.createElement('div');

        const headline = document.createElement('div');
        const author = document.createElement('div');
        const photoBox = document.createElement('div');
        const img = document.createElement('img');
        const byAuthor = document.createElement('span');
    
        // assigning classes
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        photoBox.classList.add('img-container');
        img.src = (data.authorPhoto);
    
        //oranizing elements
        card.appendChild(headline, author);
        author.appendChild(photoBox, byAuthor);
        photoBox.appendChild(img);
    
        //adding content
        headline.textContent = data.headline;
        byAuthor.textContent = data.authorName;
    
    
        return card;
        
    }
    