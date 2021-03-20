let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let catButton = document.getElementById('give-pic')

catButton.addEventListener("click", evt => {
    
     let catDiv = document.getElementById('cat-pic')
     
     fetch('https://api.thecatpai.com/v1/images/search?')
     .then(res => res.json())
     .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3>Aquí hay un gato deseandote un buen día</h3>
            <img src="${cat.url}" alt?"Kitty" />`
        });
})
})
