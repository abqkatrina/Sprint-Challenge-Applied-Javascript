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

axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then(response => {
        console.log(response.data.topics);
        //returns array of items
        tabBoard.append(CreateTab(response.data.topics));
    })
 

    .catch(error => {
        console.log('oh shit', error);
    })
// );
