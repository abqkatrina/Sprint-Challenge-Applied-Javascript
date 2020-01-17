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







    // // make parent for cards
const wall = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    //does it work?
    //console.log(response)
    //returns data object
    //console.log(response.data)
    //returns article object
    console.log(response.data.articles);
    Object.values(response.data.articles.javascript).forEach(value => { 
    //console.log(value),
    wall.append(CreateCard(value))
    })

    Object.values(response.data.articles.boostrap).forEach(value => { 
    //console.log(value),
    wall.append(CreateCard(value))
    })

    Object.values(response.data.articles.technology).forEach(value => { 
    //console.log(value),
    wall.append(CreateCard(value))
    })
  
    Object.values(response.data.articles.jQuery).forEach(value => { 
    //console.log(value),
    wall.append(CreateCard(value))
    })
 
    // Object.values(response.data.articles.node\.js).forEach(value => { 
    // //console.log(value),
    // wall.append(CreateCard(value))
    // })
})


.catch((error) => {
    console.log('dangnabbit', error);
})


function CreateCard(article){

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
    img.src = (article.authorPhoto);

    //oranizing elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(photoBox);
    author.appendChild(byAuthor);
    photoBox.appendChild(img);

    //adding content
    headline.textContent = article.headline;
    byAuthor.textContent = article.authorName;


    return card;
    
}