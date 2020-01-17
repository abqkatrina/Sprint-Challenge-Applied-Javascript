// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function CreateHeader(date, temp) {

    const newHeader = document.createElement('div');
    const cal= document.createElement('span');
    const logo = document.createElement('h1');
    const ther = document.createElement('span');
    
    newHeader.classList.add('header');
    cal.classList.add('date');
    ther.classList.add('temp');
    
    newHeader.appendChild(cal);
    newHeader.appendChild(logo);
    newHeader.appendChild(ther);
    
    cal.textContent = date;
    logo.textContent = 'Lambda Times';
    ther.textContent = temp;
    
    
    return newHeader;
    
    }
    
    
    
    const headContain = document. querySelector('.header-container');
    headContain.append(CreateHeader('17 Jan 2020', '36°'));