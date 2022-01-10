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
        "Life is a marathon, not a sprint.",
        "I am enough just as I am.",
        "We are all growing at our own pace. Choose what nourishes you and makes you happy.",
        "I deserve to take my time.",
        "Every moment I have the opportunity to choose myself.",
        "I don't always have to strive to be more than or better. I can just be myself.",
        "The closest way to success is to try one more time.",
        "You don't have to have everything all figured out. Small progress is still progress.",
        "Remember how much you have grown.",
        "Take your time to process.",
        "It is okay to start over.", 
        "Take a break. Eat, shower, watch TV, relax, go outside. You are more than your productivity.", 
        "You're great!!!",
        "Your best is enough. In fact, it's great. Like you.",
        "You don't have to do everything alone. Asking for help requires strength.",
        "As someone who struggles to say nice things to myself, it's pretty hard to think of affirmations. YOU are worth it!!!",
        "One step at a time. We can't change overnight even if we set our minds to it. There will always (ugh) be ups and downs.",
        "Hi, I'm here for you.",
        "Don't forget to fill your life with things you enjoy.",
        "You don't need to be 'productive' to have a good day. PJs and take out are a good day too.",
        "Sometimes it feels like we aren't doing much. And maybe we haven't. But maybe it's our body preparing for the journey ahead.",
        "We don't have to do our best all the time. We could, but it would be too tiring and we aren't robots.",
        "Idea: a sticker on your mirror that tells you you're cute!!",
        "Idea: every time you look in the mirror, choose a feature about yourself you like. It can be reallllly small. Like the cute mole next to your eyes.",
        "Idea: a walk in the park. Notice the way the ground feels beneath your feet. Notice the change in the temperature or crispness of the air.",
        "Maybe 'success' is other people's definition of 'giving up'. But maybe you're just choosing yourself. That's a win in my book. Go you!!!! You did it!!",
        "Idea: list your proudest accomplishest so far. What personality traits helped you along the way?",
        "Idea: check in with someone you love today.",
        "My feelings are important. I am allowed to say no. I am allowed to complain.",
        "We can be sad, but still be grateful for the wonder in our lives.",
        "Idea: check in with yourself today. How do you feel? Is there something you can do to feel a tiny bit better?",
        "To feel is to heal.",
        "I am strong. I am capable. I can do anything I set my mind to.",
        "It's okay for me to say 'No, I don't have energy for this.' In fact, it's pretty awesome of me to draw that boundary.",
        "I am great and cool to hang out with. I'm also funny. Woohoo!",
        "I am doing my very best and that's enough. That's actually great! I'm great!",
        "Commitment is not perfection.",
        "I'm taking a break because I deserve it.",
        "I need to live with the consequences of my decisions, so I am choosing to live a life that makes me the happiest.",
        "It's okay for me to make mistakes. Nobody is perfect. I can both comfort myself for falling down, and hold myself accountable to do better.",
        "I am doing good.",
        "I am good enough.",
        "You are the best you anyone can be.",
        "You're a star!",
        "Take time to recharge. A new day is ahead.",
        "I am strong and powerful. I can do it.",
        "Healing takes time.",
        "My thoughts and feelings are valid. I am not a burden when I share my feelings with others. Being gentle with myself is a sign of strength.",
        "Your feelings still matter. Even if you're not ready to share them with others.",
        "Letting go and starting over is strong.",
        "Be kind to your past self. You did the best that you could.",
        "Idea: think of 3 things you are grateful for today.",
        "Not everyday needs to be ultra responsible and productive. You are allowed to have fun.",
        "I deserve inner peace. My worth should not be defined by a number.",
        "Ups, downs, stagnation, backwards, forwards... they're all a natural part of life. We see this all around us in the trees, flowers, and mushrooms.",
        "I am focused on my goals.",
        "I am more than my productivity.",
        "I am growing at my own pace and that is fast enough.",
        "I am allowed to change my mind.",
    ];

    let randomQuote = Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent = quotes[randomQuote];
}