document.addEventListener("DOMContentLoaded", function() {
    const flashCards = [
      {
        question: "What is the capital of France?",
        answer: "Paris"
      },
      {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
      },
      {
        question: "What is the currency of Japan?",
        answer: "Yen"
      }
    ];
  
    let currentCardIndex = 0; // Keep track of the current card index, initially set to 0.
  
    // Display the question of the current card on the front of the card.
    const frontText = document.querySelector(".front p");
    frontText.textContent = flashCards[currentCardIndex].question;
  
    // When the user clicks on the card, flip it to show the answer on the back.
    const card = document.querySelector(".card");
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  
    // When the user clicks on the "next" button, increment the current card index and display the next question.
    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", () => {
      currentCardIndex++;
      if (currentCardIndex >= flashCards.length) {
        currentCardIndex = 0; // Wrap around to the beginning.
      }
      frontText.textContent = flashCards[currentCardIndex].question;
      card.classList.remove("flipped");
    });
  
    // When the user clicks on the "previous" button, decrement the current card index and display the previous question.
    const previousButton = document.querySelector(".previous-button");
    previousButton.addEventListener("click", () => {
      currentCardIndex--;
      if (currentCardIndex < 0) {
        currentCardIndex = flashCards.length - 1; // Wrap around to the end.
      }
      frontText.textContent = flashCards[currentCardIndex].question;
      card.classList.remove("flipped");
    });
  
    // When the user clicks on the "shuffle" button, shuffle the cards randomly and display the first question.
    const shuffleButton = document.querySelector(".shuffle-button");
    shuffleButton.addEventListener("click", () => {
      currentCardIndex = 0;
      shuffleArray(flashCards);
      frontText.textContent = flashCards[currentCardIndex].question;
      card.classList.remove("flipped");
    });
  
    // Helper function to shuffle the cards randomly.
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  });
  