

const simpleQuote = [
    {
        name:"quote author1",
        quote:"quote no1"
    },    {
        name:"quote author2",
        quote:"quote no2"
    },    {
        name:"quote author3",
        quote:"quote no3"
    }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click",displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*simpleQuote.length);
    // console.log(simpleQuote[number].name);
    quoteAuthor.innerHTML = simpleQuote[number].name;
    quote.innerHTML = simpleQuote[number].quote;
}