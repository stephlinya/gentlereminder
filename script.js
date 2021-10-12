const quoteDisplay = document.getElementById("quote-display");

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const overlay = document.getElementById("overlay");

openModal.addEventListener("click", function(){
    overlay.style.display = "block";
    displayQuotes();
})

closeModal.addEventListener("click", function(){
    overlay.style.display = "none";
})

function displayQuotes(){
    let quotes = ["Not everything has to be to-do list item. Your pace is okay. Your best is enough.", "There is no right time. Just time, and what you choose to do with it.", "It is okay to rest. It is okay to nap.", "You are worthy."];

    let randomQuote = Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent = quotes[randomQuote];
}