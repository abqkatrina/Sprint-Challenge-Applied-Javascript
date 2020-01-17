// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function CreateTab(data) {
    const newTab = document.createElement('div');
    const topic = document.createElement('div');

    newTab.classList.add('tab');
    topic.classList.add('topics');

    newTab.appendChild(topic);
    topic.textContent = data.topics;

return newTab;

}


const tabBoard = document.querySelector('.tabs');


// let topic =
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response => {
//         console.log(response.data);
//         makeTab(response.data.articles);
// })

// .catch((err) => {
//     console.log('error', err)
// })

// function makeTab(obj) {
//     for(let key in obj) {
//         obj[key].forEach((topic) => {
//             tabBoard.appendChild(CreateTab(topic))
//         })
//     }
// }