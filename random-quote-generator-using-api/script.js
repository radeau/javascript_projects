function generateQuote() {
    //Send a GET request to quotable API using fetch
    fetch("https://api.quotable.io/random")
      .then(response => {
        //if the response is not ok throw an error
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        //otherwise, parse the response as JSON
        return response.json();
      })
      //once we have the data, display the quote text and author
      .then(data => {
        const quote = data.content;
        const author = data.author;
        document.getElementById("quote-text").innerHTML = `"${quote}"`;
        document.getElementById("quote-author").innerHTML = `- ${author}`;
      })
      //if there is an error, log it to the console
      .catch(error => {
        console.error("There was a problem fetching the quote:", error);
      });
  }

  //Call the generateQuote function when the DOM content has loaded
  document.addEventListener("DOMContentLoaded", function(event) {
    generateQuote();
  });

  //Add an event listener to the "New Quote" button
  document.getElementById("new-quote-button").addEventListener("click", function(event) {
    //Call the generateQuote function when the button is clicked 
    generateQuote();
  });