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
// const wall = document.querySelector('.cards-container');


//     let articles =
// axios.get('https://lambda-times-backend.herokuapp.com/articles')

// .then(response => {
    //does it work?
    //console.log(response);
    //returns data object
    //console.log(response.data);
    //returns article object
    //console.log(response.data.articles)})
    // let articleList = response.data.articles;
    // let entryList = Object.values(articleList).map((value, index) => {
    //     return(value, articleList[value])});
    // let article = Object.values(entryList).map((value, index) => {
    //     console.log(value, entryList[value])})

        //console.log(CreateCard(articleList[value]));
  
    // console.log(article);})
        // CreateCard2(response.data.articles);

// .catch((err) => {
//     console.log('error', err)
// })

// function CreateCard2(obj) {
//     Object.keys(obj).forEach((key, index) => {
//     //console.log(key, obj[key]);
//     console.log(CreateCard(obj[key]));
//     wall.append(CreateCard(obj[key]));
//     })
// }
    



// axios.get('https://lambda-times-backend.herokuapp.com/articles')

//     .then(response => {
//          //does it work?
//         //console.log(response.data.articles);
//         //returns array of objects. need to separate objects
//         wall.append(CreateCard1(response.data.articles));
        
   

//     function CreateCard1(obj){
//     Object.keys(obj).forEach((key, index) => {
//         //console.log(key, obj[key]);
//         console.log(CreateCard(obj[key]));
//         wall.append(CreateCard(obj[key]));
//         })
//     }
//     })
//     .catch(error => {
//        console.log("dangnabbit", error);
//     })


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
    card.appendChild(headline, author);
    author.appendChild(photoBox, byAuthor);
    photoBox.appendChild(img);

    //adding content
    headline.textContent = article.headline;
    byAuthor.textContent = article.authorName;


    return card;
    
}