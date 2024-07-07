// https://type.fit/api/quotes

// https://api.adviceslip.com/advice

let quoteAPI = 'https://favqs.com/api/qotd';

let adviceAPI = 'https://api.adviceslip.com/advice';

async function getAdvice(url){
    try {
        let response = await fetch(url);
        let data = await response.json();
        quote.innerText = await data.slip.advice;
    } catch (error) {
        console.log('try again');
    }
} 

async function getQuote() {
    await getAdvice(adviceAPI);
}