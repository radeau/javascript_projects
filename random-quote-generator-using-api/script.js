const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
        text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
        text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
        text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
      },
      {
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
      },
      {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
      }
  ];

  function generateQuote() {
    // Get a random quote object from the quotes array
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Display the quote on the web page
    const quoteTextElement = document.getElementById("quote-text");
    const quoteAuthorElement = document.getElementById("quote-author");
    quoteTextElement.textContent = `"${quote.text}"`;
    quoteAuthorElement.textContent = `- ${quote.author}`;
  }
  
  const newQuoteButton = document.getElementById("new-quote-button");
  newQuoteButton.addEventListener("click", generateQuote);
  
  // Display a random quote on page load
  generateQuote();
  