const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");
const instagramButton=document.getElementById("instagram");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://raw.githubusercontent.com/gabrielapansini/QuoteGenerator/main/quotes.js";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    
    const allQuotes = await response.json();

    
    const indx = Math.floor(Math.random()*allQuotes.length);

    
    const quote=allQuotes[indx].text;
    
    
    const auth=allQuotes[indx].author;

    
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    //tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
    
    //share the quote
    instagramButton.href="https://www.instagram.com/?url=https://www.drdrop.co/"+quote+" ~ "+auth;

}

getNewQuote();
