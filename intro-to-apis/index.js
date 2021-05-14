const url = "https://ghibliapi.herokuapp.com/films";
const request = new XMLHttpRequest();
const app = document.getElementById("root");

request.open("GET", url, true);
request.onload = function() {
    let data = JSON.parse(this.response);    
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            const card = document.createElement("div")
            card.setAttribute("class", "card")

            const h1 = document.createElement("h1")
            h1.textContent = movie.title

            const p = document.createElement("p")
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}`

            card.appendChild(h1)
            card.appendChild(p)

            container.appendChild(card)
        })        
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}
request.send()

const logo = document.createElement("img")
logo.src = "https://taniarascia.github.io/sandbox/ghibli/logo.png"

const container = document.createElement("div")
container.setAttribute("class", "container")

app.appendChild(logo)
app.appendChild(container)