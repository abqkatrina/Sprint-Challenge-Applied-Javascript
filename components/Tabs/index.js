// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function CreateTab(top) {
    const newTab = document.createElement('div');
    const topic = document.createElement('div');

    newTab.classList.add('tab');
    topic.classList.add('topics');

    newTab.appendChild(topic);
    topic.textContent = top.topics;

return newTab;

}


const tabBoard = document.querySelector('.tabs');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
        //console.log(response.data.articles);
        Object.values(response.data.articles).forEach(value => { 
            console.log(value)
;        })
        response.data.articles.bootstrap.forEach(item => {
            tabBoard.append(CreateTab(item))
        })
})

.catch((err) => {
    console.log('error', err)
})
