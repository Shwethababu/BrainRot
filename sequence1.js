const sequenceData = [
    { heading: 'Pinocchio walked into a job interview, excited to impress',body:''},
    { heading: 'The interviewer asked, “Do you have any previous experience?”',body:'' },
    { heading: 'Pinocchio proudly said, “I’m an expert at telling the truth!”',body:'' },
    { heading: ' The interviewer raised an eyebrow, “Really? What about your nose?”.',body:''},
    { heading: 'Pinocchio’s nose grew to the size of the table, and he nervously said, “Uh, I mean, I’m really good at growing experience',body:''},
    { heading: "The interviewer chuckled, “Well, at least you're honest about that!”",body:''},
  ];
  
  
// Utility function to generate a random shuffle of indices
const generateRandomOrder = (length) => {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [order[i], order[randomIndex]] = [order[randomIndex], order[i]];
  }
  return order;
};

// Generate a random wrong order each time
const wrongOrder = generateRandomOrder(sequenceData.length);
  
  // Select the container to append cards
  const container = document.querySelector('.card-container');
  const memeContainer = document.getElementById('meme-container');
  
  // Function to render the cards in an incorrect order
  const renderCards = () => {
    wrongOrder.forEach((index) => {
      const data = sequenceData[index];
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('draggable', true); // Make the card draggable
      card.setAttribute('data-heading', data.heading); // Store the correct heading for validation
      card.innerHTML = `
        <h1 class="card-heading">${data.heading}</h1>
        <p class="card-body">${data.body}</p>
      `;
  
      // Add dragstart event
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', data.heading); // Store the dragged card's identifier
        setTimeout(() => {
          card.classList.add('dragging'); // Add a class to visually indicate dragging
        }, 0);
      });
  
      // Add dragend event
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging'); // Remove the dragging class after drop
      });
  
      // Append the card to the container
      container.appendChild(card);
    });
  };
  
  // Function to handle dragging over a valid drop zone
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
      container.appendChild(draggingCard);
    } else {
      container.insertBefore(draggingCard, afterElement);
    }
  });
  
  // Function to determine the position to insert the dragged card
  const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };
  
  // Function to display a meme (GIF)
  const showMeme1 = () => {
    const memeAlert = document.getElementById('meme-alert');
    const memeImage = document.getElementById('meme-image');
    const memeText = document.getElementById('meme-text');
    const overlay = document.getElementById('overlay');
  
    // Set the meme image and text
    memeImage.src = 'correct meme.gif'; // Replace with your GIF path
    memeText.textContent = '🎉 Congrats! You arranged the sequence correctly! 🎉';
  
    // Show the alert and overlay
    memeAlert.style.display = 'block';
    overlay.style.display = 'block';
  
    // Add functionality to close the alert
    document.getElementById('close-meme').addEventListener('click', () => {
      memeAlert.style.display = 'none';
      overlay.style.display = 'none';
    });
  };

  const showMeme2 = () => {
    const memeAlert = document.getElementById('meme-alert');
    const memeImage = document.getElementById('meme-image');
    const memeText = document.getElementById('meme-text');
    const overlay = document.getElementById('overlay');
  
    // Set the meme image and text
    memeImage.src = 'wrong_answer.webp'; // Replace with your GIF path
    
  
    // Show the alert and overlay
    memeAlert.style.display = 'block';
    overlay.style.display = 'block';
  
    // Add functionality to close the alert
    document.getElementById('close-meme').addEventListener('click', () => {
      memeAlert.style.display = 'none';
      overlay.style.display = 'none';
    });
  };
  
  // Check the sequence when the button is clicked
  document.getElementById('check-sequence').addEventListener('click', () => {
    const cards = Array.from(container.children);
  
    // Check if each card's data-heading matches the sequenceData order
    const isCorrect = cards.every((card, index) => {
      return card.getAttribute('data-heading') === sequenceData[index].heading;
    });
  
    if (isCorrect) {
      
      showMeme1(); // Show meme on correct sequence
    } else {
      showMeme2();
    }
  });
  
  // Call render function to display the cards on page load
  renderCards();
  // Add an event listener to the Go Back button
document.getElementById('go-back').addEventListener('click', () => {
  history.back(); // Navigate to the previous page
});

  