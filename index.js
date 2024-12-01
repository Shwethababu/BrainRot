const cardData1 = [
    {
        heading :"The Titanic's Alternate Ending ",
        body:''
    },
    
]
const cardData2=[
    {
        heading:'Pinocchio’s Job Interview',
        body:''
    },
]
const cardData3 =[
    {
        heading :'The Human Brain',
        body:''
    },

]
const cardData4=[
    {
        heading :'ChatGPT : The Saviour',
        body:''
    },
]

const cardData5=[
    {
        heading :'The Gamma',
        body:''
    },
]

const postContainer = document.querySelector('.card-container');
// Function to shuffle an array

const postMethods = ()=> {
    cardData1.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods()

const postMethods2 = ()=> {
    cardData2.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game1.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods2()

const postMethods3 = ()=> {
    cardData3.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game2.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods3()

const postMethods4 = ()=> {
    cardData4.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game3.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods4()

const postMethods5 = ()=> {
    cardData5.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game4.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods5()