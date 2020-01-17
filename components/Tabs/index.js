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

    //constructing elements
    const newTab = document.createElement('div');
    const topic = document.createElement('div');

    //assigning classes
    newTab.classList.add('topics');
    topic.classList.add('tab');

    //organizing elements
    newTab.appendChild(topic);

    //adding content
    topic.textContent = top;

return newTab;

}


const tabBoard = document.querySelector('.tabs');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
        //console.log(response.data.topics)
        response.data.topics.forEach( value => {
            tabBoard.append(CreateTab(value))
        })
    })

.catch((error) => {
    console.log('oh, snap!', error)
})
