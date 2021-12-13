const quoteDisplay = document.getElementById("quote-display");
const sparklesRight= document.getElementById("sparkles-r");
const sparklesLeft= document.getElementById("sparkles-l");
const openLetter = document.getElementById("open-letter");
const openLink = document.getElementById("open");
const closeLetter = document.getElementById("close-letter");
const overlay = document.getElementById("overlay");
const title = document.getElementById("title");
const btnText = document.getElementById("btn-text");

openLetter.addEventListener("click", function(){
    overlay.style.display = "block";
    openLetter.style.display = "none";
    title.style.display = "none";
    btnText.style.display = "none";
    sparklesRight.style.display = "none";
    sparklesLeft.style.display = "none";
    displayQuotes();
})

openLink.addEventListener("click", function(){
    overlay.style.display = "block";
    openLetter.style.display = "none";
    title.style.display = "none";
    btnText.style.display = "none";
    sparklesRight.style.display = "none";
    sparklesLeft.style.display = "none";
    displayQuotes();
})

closeLetter.addEventListener("click", function(){
    overlay.style.display = "none";
    openLetter.style.display = "block";
    title.style.display = "block";
    btnText.style.display = "block";
    sparklesRight.style.display = "inline-block";
})

function displayQuotes(){
    let quotes = [
        "Not everything has to be to-do list item. Your pace is okay. Your best is enough.", 
        "There is no right time. Just time, and what you choose to do with it.", 
        "It is okay to rest. It is okay to nap.", 
        "You are worthy.",
        "Done is better than perfect.",
        "Life is a marathon and not a sprint.",
        "I am enough just as I am.",
        "We are all growing at our own pace.",
        "I deserve to take my time.",
        "Every moment I have the opportunity to choose myself.",
        "I don't always have to strive to be more than or better. I can just be myself.",
        "The closest way to success is to try one more time.",
    ];

    let randomQuote = Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent = quotes[randomQuote];
}