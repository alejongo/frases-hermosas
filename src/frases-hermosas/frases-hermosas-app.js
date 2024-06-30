const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0])
    return data[0];
}



// Se usa con B para indicar que es un componente
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const FrasesHermosas = async (element) => {
    const title = document.querySelector('#app-title').innerHTML = 'Frases Hermosas';
    element.innerHTML = 'Loading...';
    //const quote = await fetchQuote();

    const quoteLabel = document.createElement('h2');
    quoteLabel.setAttribute('class', 'text-2xl font-mono')
    const authorLabel = document.createElement('h4');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Siguiente Frase';
    nextQuoteButton.setAttribute('class', "button text-sky-600 m-10")
    const loader = document.createElement('div');
    loader.setAttribute('class', 'loader center')



    const renderQuote = (quoteData) => {
        quoteLabel.innerHTML = quoteData.quote;
        authorLabel.innerHTML = quoteData.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    // Diable button
    const nextQuote = async () => {
        element.replaceChildren(loader);
        const quote = await fetchQuote();
        setTimeout(() => {
            renderQuote(quote);
        }, 1000);
    }


    // ADD EVENT LISTENER  
    nextQuoteButton.addEventListener("click", nextQuote)

    fetchQuote()
        .then(data => renderQuote(data))

}



