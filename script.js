const quoteDisplay = document.getElementById("quote-display");
const sparkles= document.getElementById("sparkles");
const openLetter = document.getElementById("open-letter");
const openLink = document.getElementById("open");
const closeLetter = document.getElementById("close-letter");
const overlay = document.getElementById("overlay");

openLetter.addEventListener("click", function(){
    overlay.style.display = "block";
    openLetter.style.display = "none";
    sparkles.style.display = "none";
    displayQuotes();
})

openLink.addEventListener("click", function(){
    overlay.style.display = "block";
    openLetter.style.display = "none";
    sparkles.style.display = "none";
    displayQuotes();
})

closeLetter.addEventListener("click", function(){
    overlay.style.display = "none";
    openLetter.style.display = "block";
})

function displayQuotes(){
    let quotes = [
        "Not everything has to be to-do list item. Your pace is okay. Your best is enough.", 
        "There is no right time. Just time, and what you choose to do with it.", 
        "It is okay to rest. It is okay to nap.", 
        "You are worthy.",
        "Done is better than perfect.",
        "It is a marathon and not a sprint.",
        "The closest way to success is to try one more time.",
    ];

    let randomQuote = Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent = quotes[randomQuote];
}