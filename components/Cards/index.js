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



function CreateCard(item){

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

    //oranizing elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(photoBox);
    author.appendChild(byAuthor);
    photoBox.appendChild(img);

    //adding content
    headline.textContent = (item.headline);
    img.src = (item.authorPhoto);
    byAuthor.textContent = (item.authorName);


    return card;
    
}



    // // make parent for cards
const wall = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    //does it work?
    //console.log(response)
    //returns data object
    //console.log(response.data)
    //returns article object
    //console.log(response.data.articles);

    Object.keys(response.data.articles).forEach((key, index) => {
        //console.log(key, response.data.articles[key]);
        
        response.data.articles[key].forEach(entry => {
            wall.append(CreateCard(entry));
        });
 
    })
})

.catch((error) => {
    console.log('Dangnabbit!', error);
})
